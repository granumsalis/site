var angular = require('angular');

angular.module('thinkSlowApp')

    .controller('ThinkSlowMainCtrl', [
        'speakers',
        'meetings',
        function(speakers, meetings) {
          var thinkSlowMainCtrl = this;

          thinkSlowMainCtrl.mettingsAnnouncements = meetings;
          thinkSlowMainCtrl.mettingsAnnouncements.forEach(function(meeting) {
            var speakerIds = meeting.speakers;
            meeting.speakers = speakers.filter(function(speaker) {
              return speakerIds.indexOf(speaker.id) > -1
            });
          });
        }
    ]);
