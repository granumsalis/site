var angular = require('angular');

angular.module('thinkSlowApp')

    .controller('ThinkSlowMainCtrl', [
      'places',
      'organizers',
      '$window',
      'BackendUrl',
      '$resource',
      '$q',
      function(places, organizers, $window, BackendUrl, $resource, $q) {

        var thinkSlowMainCtrl = this;

        thinkSlowMainCtrl.mettingsAnnouncements = $resource(BackendUrl + 'meetings').query();

        $q.all({
          meetings: thinkSlowMainCtrl.mettingsAnnouncements.$promise,
          speakers: $resource(BackendUrl + 'speakers').query().$promise
        }).then(function(result) {
          console.log('result', result);
          var meetings = result.meetings;
          var speakers = result.speakers;
          meetings.forEach(function(meeting) {
            var speakerIds = meeting.speakers;
            meeting.speakers = speakers.filter(function(speaker) {
              return speakerIds.indexOf(speaker._id) > -1
            });
            for (var i = 0; i < places.length; ++i) {
              if (places[i].id === meeting.place) {
                meeting.place = places[i];
                break;
              }
            }
          });
        });

        thinkSlowMainCtrl.organizers = organizers;

        thinkSlowMainCtrl.sendFeedbackMail = function() {
          $window.open('mailto:' + 'info@granumsalis.ru');
        };

        thinkSlowMainCtrl.fillInFeedbackForm = function() {
          $('#feedback-form-dialog').openModal();
        };
      }
    ]);
