import axios from 'axios';

module.exports = {
    getCurrentWeather: function(param) {
        var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/weather?q=Lodz,pl&APPID=137184927a2d961334253cbaa4211a63');

        return axios.get(encodedURI)
            .then(function(response){
                return response.data;
            }, function(){
            })
    },
    getForecast: function(param) {
        var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/forecast?q=Lodz,pl&APPID=137184927a2d961334253cbaa4211a63');

        return axios.get(encodedURI)
            .then(function(response){
                return response.data;
            }, function(){
            })
    }
};