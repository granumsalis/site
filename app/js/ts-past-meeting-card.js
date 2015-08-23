var angular = require('angular');

angular.module('thinkSlowApp')

    .directive('tsPastMeetingCard', [
        function () {
          return {
            restrict: 'E',
            template: require('./../templates/ts-past-meeting-card.html'),
            scope: {
              meeting: '=',
              isEven: '&'
            },
            controllerAs: 'ctrl',
            bindToController: true,
            controller: [
                '$scope',
                '$sce',
                function($scope, $sce) {
                  var ctrl = this;

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
