/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    user: "Paul Rosset",
    apiKeysWU: "771533f0d5509845",
    location: {
        languages: "fr", // fr and en supported atm
        country: "France",
        city: "Nice"
    },
    configTheme: {
        author: "",
        nameTheme: "default"
        // @todo Customize theme
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    moment.locale('fr', {
        months: 'Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Août_Septembre_Octobre_Novembre_Décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: true,
        weekdays: 'Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Aujourd’hui à] LT',
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'dans %s',
            past: 'il y a %s',
            s: 'quelques secondes',
            m: 'une minute',
            mm: '%d minutes',
            h: 'une heure',
            hh: '%d heures',
            d: 'un jour',
            dd: '%d jours',
            M: 'un mois',
            MM: '%d mois',
            y: 'un an',
            yy: '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function ordinal(number) {
            return number + (number === 1 ? 'er' : 'e');
        },
        meridiemParse: /PD|MD/,
        isPM: function isPM(input) {
            return input.charAt(0) === 'M';
        },
        meridiem: function meridiem(hours, minutes, isLower) {
            return hours < 12 ? 'PD' : 'MD';
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    chanceflurries: "wi-day-snow",
    chancerain: "wi-day-rain",
    chancesleet: "wi-day-sleet",
    chancesnow: "wi-day-snow",
    chancetstorms: "wi-thunderstorm",
    clear: "wi-day-sunny",
    cloudy: "wi-cloud",
    flurries: "wi-snow",
    fog: "wi-fog",
    hazy: "wi-cloudy",
    mostlycloudy: "wi-day-cloudy",
    mostlysunny: "wi-day-cloudy",
    partlycloudy: "wi-day-cloudy",
    partlysunny: "wi-day-cloudy",
    rain: "wi-day-rain",
    sleet: "wi-day-sleet",
    snow: "wi-day-snow",
    sunny: "wi-day-sunny",
    tstorms: "wi-day-thunderstorm",
    nt_chanceflurries: "wi-night-alt-snow",
    nt_chancerain: "wi-night-alt-rain",
    nt_chancesleet: "wi-night-alt-sleet",
    nt_chancesnow: "wi-night-alt-snow",
    nt_chancetstorms: "wi-thunderstorm",
    nt_clear: "wi-night-clear",
    nt_cloudy: "wi-cloud",
    nt_flurries: "wi-snow",
    nt_fog: "wi-night-fog",
    nt_hazy: "wi-night-cloudy",
    nt_mostlycloudy: "wi-night-alt-cloudy",
    nt_mostlysunny: "wi-night-alt-cloudy",
    nt_partlycloudy: "wi-night-alt-cloudy",
    nt_partlysunny: "wi-night-alt-cloudy",
    nt_sleet: "wi-night-alt-sleet",
    nt_snow: "wi-night-alt-snow",
    nt_sunny: "wi-night-clear",
    nt_tstorms: "wi-thunderstorm"
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _weatherIcon = __webpack_require__(2);

var _weatherIcon2 = _interopRequireDefault(_weatherIcon);

var _momentConfig = __webpack_require__(1);

var _momentConfig2 = _interopRequireDefault(_momentConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {

    (0, _momentConfig2.default)();

    setInterval(function getWeather() {
        $.get('http://api.wunderground.com/api/' + _config2.default.apiKeysWU + '/hourly/q/' + _config2.default.location.country + '/' + _config2.default.location.city + '.json', function (data) {
            for (var i = 0; i <= 10; i += 2) {
                var time = data.hourly_forecast[i].icon_url.split('/').pop().split('.')[0];
                $('.main__elem--' + [i]).html('<i class="wi ' + _weatherIcon2.default[time] + ' main__elem--size-img"></i><p class="main__elem--metric"> ' + data.hourly_forecast[i].temp.metric + ' \xB0C</p><p class="main__elem--hour"> ' + data.hourly_forecast[i].FCTTIME.hour + ':00 h</p>');
            }
        });
        return getWeather;
    }(), 2700000); //2700000

    setInterval(function () {
        $('.hours').text(moment().format("HH : mm : ss"));
        $('.date').text(_config2.default.location.languages === 'fr' ? moment().locale('fr').format("dddd D MMMM YYYY") : moment().locale('en').format("dddd, MMMM Do YYYY"));
    }, 1000);
});

/***/ })
/******/ ]);