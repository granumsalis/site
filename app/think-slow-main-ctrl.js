var angular = require('angular');

angular.module('thinkSlowApp')

    .controller('ThinkSlowMainCtrl', [
      'speakers',
      'meetings',
      'places',
      function(speakers, meetings, places) {
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
      }
    ]);
