require('./thinkslow.scss');

var angular = require('angular');

var thinkSlowAppModule = angular.module('thinkSlowApp', []);

thinkSlowAppModule.constant('Stamplay', window.Stamplay);

thinkSlowAppModule.config([
    'Stamplay',
    function(Stamplay) {
      Stamplay.init('7c756fe1e05a6a9742fdba24a116ad5c14f7cbb2da974889fcb962f74c2a0226');
    }
]);

require('./effects-initialization');
require('./ts-meeting-announcement');
require('./ts-past-meeting-card');
require('./think-slow-main-ctrl');

module.exports = thinkSlowAppModule;
