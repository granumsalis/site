var angular = require('angular');

angular.module('thinkSlowApp')

    .directive('tsMeetingAnnouncement', [
      function () {
        return {
          restrict: 'E',
          template: require('./../templates/ts-meeting-announcement.html'),
          scope: {
            meeting: '=',
            isLast: '&'
          },
          controllerAs: 'ctrl',
          bindToController: true,
          controller: [
            '$scope',
            '$sce',
            function($scope, $sce) {
              var ctrl = this;

              ctrl.id = Math.floor(Math.random() * 1000000);

              $scope.$watch('ctrl.meeting', function(meeting) {
                if (!meeting) {
                  return;
                }
                if (meeting.description) {
                  ctrl.trustedDescription = meeting.description ? $sce.trustAsHtml(meeting.description) : '';
                }
                $scope.$evalAsync(function() {
                  $('#announcement-' + ctrl.id + 'tabs').tabs();
                });
              });

              $scope.$watch('ctrl.meeting.place', function(place) {
                if (place) {
                  var yaMapUrl = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?sid='
                      + place.yaMapId + '&width=600&height=380&id=map-placeholder-' + ctrl.id;
                  $.getScript(yaMapUrl, angular.noop);
                }
              });


            }
          ]
        };
      }
    ]);
