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

              ctrl.speakers = [
                {
                  name: 'Анастасия Сергеева',
                  photo: 'https://ucare.timepad.ru/fd4dd2c6-5a38-41d7-8e35-2e299027ffb0/',
                  link: null,
                  description: '<p>Анастасия Сергеева окончила факультет психологии СпбГУ по специальности «Организационная психология»; в 2013-м году защитила кандидатскую диссертацию в Институте психологии РАН (эргономика, инженерная психология и психология труда).</p><p>Преподает в Университете ИТМО (курсы «Психология общения», «Проблемы сознания и эффективности в конфликтном и функциональном взаимодействии»), разработчик курса «Психология виртуальных коммуникаций и культурология киберпространства». Выступает с публичными лекциями по проблемам перспектив инженерной психологии и по социальной стороне информационной безопасности.</p><p>Область научных интересов — то, как люди разговаривают между собой, общаются, шутят, обманывают, рассказывают истории — и в «живом общении» и в коммуникации с помощью технических средств.</p>'
                }
              ]
            }
          ]
        };
      }
    ]);
