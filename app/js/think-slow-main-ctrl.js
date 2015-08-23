var angular = require('angular');

angular.module('thinkSlowApp')

    .controller('ThinkSlowMainCtrl', [
      'speakers',
      'meetings',
      'places',
      '$window',
      function(speakers, meetings, places, $window) {
        var thinkSlowMainCtrl = this;

        thinkSlowMainCtrl.mettingsAnnouncements = meetings;
        thinkSlowMainCtrl.mettingsAnnouncements.forEach(function(meeting) {
          var speakerIds = meeting.speakers;
          meeting.speakers = speakers.filter(function(speaker) {
            return speakerIds.indexOf(speaker.id) > -1
          });
          for (var i = 0; i < places.length; ++i) {
            if (places[i].id === meeting.place) {
              meeting.place = places[i];
              break;
            }
          }
        });

        thinkSlowMainCtrl.sendFeedbackMail = function() {
          $window.open('mailto:' + 'info@granumsalis.ru');
        };

        thinkSlowMainCtrl.fillInFeedbackForm = function() {
          $('#feedback-form-dialog').openModal();
        };
      }
    ]);
