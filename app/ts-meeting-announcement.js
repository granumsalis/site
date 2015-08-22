var angular = require('angular');

angular.module('thinkSlowApp')

    .directive('tsMeetingAnnouncement', [
      function () {
        return {
          restrict: 'E',
          template: require('./ts-meeting-announcement.html'),
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
                if (meeting && meeting.description) {
                  ctrl.trustedDescription = $sce.trustAsHtml(meeting.description);
                } else {
                  ctrl.trustedDescription = null;
                }
              });

              var yaMapUrl = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=HV03escVDNTT1fzr3KmARPDVMFgDEMHN&width=600&height=380&id=map-placeholder-' + ctrl.id;
              $.getScript(yaMapUrl, angular.noop);
            }
          ]
        };
      }
    ]);
