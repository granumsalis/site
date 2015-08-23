var angular = require('angular');
require('../node_modules/angular-i18n/angular-locale_ru-ru');

var thinkSlowAppModule = angular.module('thinkSlowApp', []);

thinkSlowAppModule.constant('Stamplay', window.Stamplay);

thinkSlowAppModule.config([
    'Stamplay',
    function(Stamplay) {
      Stamplay.init('thinkslow');
    }
]);

/**
 * Styles
 */
require('./thinkslow.scss');

/**
 * Javascript
 */
require('./effects-initialization');
require('./ts-meeting-announcement');
require('./ts-past-meeting-card');
require('./ts-profile-photo');
require('./think-slow-main-ctrl');
require('./displayed-data');

/**
 * Templates
 */
require('./suggest-topic-action.html');

module.exports = thinkSlowAppModule;
