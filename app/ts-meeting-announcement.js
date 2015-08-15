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
            }
          ]
        };
      }
    ]);
