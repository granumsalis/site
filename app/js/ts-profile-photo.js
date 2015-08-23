var angular = require('angular');

angular.module('thinkSlowApp')

    .directive('tsProfilePhoto', [
        function() {
          return {
            template: require('./../templates/ts-profile-photo.html'),
            scope: {
              profile: '='
            },
            restrict: 'E',
            controllerAs: 'profileCtrl',
            bindToController: true,
            controller: [
                '$sce',
                '$scope',
                function($sce, $scope) {
                  var profileCtrl = this;

                  profileCtrl.id = Math.floor(Math.random() * 1000000);

                  $scope.$watch('profileCtrl.profile.description', function(description) {
                    profileCtrl.trustedProfileDescription = description ? $sce.trustAsHtml(description) : '';
                  });
                }
            ]
          };
        }
    ]);

