var angular = require('angular');

angular.module('thinkSlowApp')

    .controller('ThinkSlowMainCtrl', [
      'places',
      'organizers',
      '$window',
      'BackendUrl',
      '$resource',
      '$q',
      'speakers',
      '$interval',
      function(places, organizers, $window, BackendUrl, $resource, $q, speakers, $interval) {

        var thinkSlowMainCtrl = this;

        thinkSlowMainCtrl.mettingsAnnouncements = $resource(BackendUrl + 'meetings').query();
        thinkSlowMainCtrl.speakers = $resource(BackendUrl + 'speakers').query();

        $q.all({
          meetings: thinkSlowMainCtrl.mettingsAnnouncements.$promise,
          speakers: thinkSlowMainCtrl.speakers.$promise
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
