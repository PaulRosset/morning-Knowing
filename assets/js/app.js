import config from './../config/config.js'
import weatherIcon from './../config/weatherIcon.js'
import momentConfigInit from './../config/momentConfig.js'

$(document).ready(function () {

    momentConfigInit()

    setInterval(function getWeather() {
        $.get(`http://api.wunderground.com/api/${config.apiKeysWU}/hourly/q/${config.location.country}/${config.location.city}.json`, function(data) {
            for (let i = 0; i <= 10; i += 2) {
                var time = data.hourly_forecast[i].icon_url.split('/').pop().split('.')[0];
                $('.main__elem--' + [i]).html(`<i class="wi ${weatherIcon[time]} main__elem--size-img"></i><p class="main__elem--metric"> ${data.hourly_forecast[i].temp.metric} °C</p><p class=\"main__elem--hour\"> ${data.hourly_forecast[i].FCTTIME.hour}:00 h</p>`)
            }
        })
        return getWeather
    }(), 2700000) //2700000

    setInterval(function() {
        $('.hours').text(moment().format("HH : mm : ss"))
        $('.date').text(config.location.languages === 'fr' ? moment().locale('fr').format("dddd D MMMM YYYY") : moment().locale('en').format("dddd, MMMM Do YYYY"))
    }, 1000)
});