var angular = require('angular');
require('../node_modules/angular-i18n/angular-locale_ru-ru');
require('../node_modules/angular-resource/angular-resource');

var thinkSlowAppModule = angular.module('thinkSlowApp', [
    'ngResource'
]);

thinkSlowAppModule.constant('Stamplay', window.Stamplay);

thinkSlowAppModule.constant('BackendUrl', BACKEND);

thinkSlowAppModule.config([
    'Stamplay',
    function(Stamplay) {
      Stamplay.init('thinkslow');
    }
]);

/**
 * Styles
 */
require('./styles/thinkslow.scss');

/**
 * Javascript
 */
require('./js/effects-initialization');
require('./js/ts-meeting-announcement');
require('./js/ts-past-meeting-card');
require('./js/ts-profile-photo');
require('./js/think-slow-main-ctrl');
require('./js/displayed-data');

/**
 * Templates
 */
require('./templates/suggest-topic-action.html');

module.exports = thinkSlowAppModule;
