import React from 'react';

import api from '../../utils/api';

class CurrentWeather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            now: null,
            forecast: null,
            dayForecast: null
        };
    }
    componentDidMount(){
        const dayNames = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
        const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

        // api.getCurrentWeather()
            // .then(function(response){
            //     response.sys.sunriseDate = new Date(response.sys.sunrise*1000).getHours() + ':' + new Date(response.sys.sunrise*1000).getMinutes();
            //     response.sys.sunsetDate = new Date(response.sys.sunset*1000).getHours() + ':' + new Date(response.sys.sunset*1000).getMinutes();
            //     this.setState({
            //         now: response
            //     });
            // }.bind(this));

        var response = {"coord":{"lon":19.47,"lat":51.75},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":294.15,"pressure":1009,"humidity":68,"temp_min":294.15,"temp_max":294.15},"visibility":10000,"wind":{"speed":3.6,"deg":290},"clouds":{"all":20},"dt":1501236000,"sys":{"type":1,"id":5358,"message":0.0026,"country":"PL","sunrise":1501210776,"sunset":1501266998},"id":3093133,"name":"Lodz","cod":200};
        response.sys.sunriseDate = new Date(response.sys.sunrise*1000).getHours() + ':' + new Date(response.sys.sunrise*1000).getMinutes();
        response.sys.sunsetDate = new Date(response.sys.sunset*1000).getHours() + ':' + new Date(response.sys.sunset*1000).getMinutes();

        // api.getForecast()
        //     .then(function(response){
        //         const dayForecast = [];
        //
        //         for (let i = 4; i >= 0; i--) {
        //             dayForecast[i] = response.list.splice(Math.max(0,response.list.length - 8), 8);
        //             dayForecast[i].weekday = dayNames[new Date(dayForecast[i][0].dt_txt).getDay()];
        //             dayForecast[i].date = months[new Date(dayForecast[i][0].dt_txt).getMonth()] + ' ' +
        //                 new Date(dayForecast[i][0].dt_txt).getDate() + ', ' +
        //                 (1900 + new Date(dayForecast[i][0].dt_txt).getYear());
        //         }
        //         this.setState({
        //             dayForecast: dayForecast
        //         })
        //     }.bind(this));

        var response1 = {"cod":"200","message":0.1511,"cnt":36,"list":[{"dt":1501243200,"main":{"temp":293.78,"temp_min":291.478,"temp_max":293.78,"pressure":1002.57,"sea_level":1023.94,"grnd_level":1002.57,"humidity":86,"temp_kf":2.3},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":76},"wind":{"speed":4.07,"deg":302.004},"rain":{"3h":0.03},"sys":{"pod":"d"},"dt_txt":"2017-07-28 12:00:00"},{"dt":1501254000,"main":{"temp":293.86,"temp_min":292.136,"temp_max":293.86,"pressure":1003.45,"sea_level":1024.81,"grnd_level":1003.45,"humidity":84,"temp_kf":1.72},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":0},"wind":{"speed":4.02,"deg":298.001},"rain":{"3h":0.22},"sys":{"pod":"d"},"dt_txt":"2017-07-28 15:00:00"},{"dt":1501264800,"main":{"temp":292.39,"temp_min":291.243,"temp_max":292.39,"pressure":1004.45,"sea_level":1025.86,"grnd_level":1004.45,"humidity":79,"temp_kf":1.15},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":4.93,"deg":276.508},"rain":{"3h":0.08},"sys":{"pod":"d"},"dt_txt":"2017-07-28 18:00:00"},{"dt":1501275600,"main":{"temp":288.2,"temp_min":287.625,"temp_max":288.2,"pressure":1005.49,"sea_level":1027.06,"grnd_level":1005.49,"humidity":89,"temp_kf":0.57},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":0},"wind":{"speed":2.86,"deg":266},"rain":{"3h":0.1},"sys":{"pod":"n"},"dt_txt":"2017-07-28 21:00:00"},{"dt":1501286400,"main":{"temp":285.815,"temp_min":285.815,"temp_max":285.815,"pressure":1006.01,"sea_level":1027.72,"grnd_level":1006.01,"humidity":91,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":20},"wind":{"speed":3.54,"deg":246},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-29 00:00:00"},{"dt":1501297200,"main":{"temp":285.242,"temp_min":285.242,"temp_max":285.242,"pressure":1006.85,"sea_level":1028.55,"grnd_level":1006.85,"humidity":93,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.61,"deg":245.002},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-29 03:00:00"},{"dt":1501308000,"main":{"temp":289.358,"temp_min":289.358,"temp_max":289.358,"pressure":1007.89,"sea_level":1029.42,"grnd_level":1007.89,"humidity":87,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":20},"wind":{"speed":3.61,"deg":251.502},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-29 06:00:00"},{"dt":1501318800,"main":{"temp":292.767,"temp_min":292.767,"temp_max":292.767,"pressure":1008.21,"sea_level":1029.68,"grnd_level":1008.21,"humidity":84,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":24},"wind":{"speed":4.08,"deg":243.003},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-29 09:00:00"},{"dt":1501329600,"main":{"temp":294.664,"temp_min":294.664,"temp_max":294.664,"pressure":1007.94,"sea_level":1029.26,"grnd_level":1007.94,"humidity":73,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":5.01,"deg":238.007},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-29 12:00:00"},{"dt":1501340400,"main":{"temp":295.707,"temp_min":295.707,"temp_max":295.707,"pressure":1007.15,"sea_level":1028.47,"grnd_level":1007.15,"humidity":66,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":12},"wind":{"speed":4.96,"deg":242.004},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-29 15:00:00"},{"dt":1501351200,"main":{"temp":294.731,"temp_min":294.731,"temp_max":294.731,"pressure":1007.04,"sea_level":1028.42,"grnd_level":1007.04,"humidity":65,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":76},"wind":{"speed":3.87,"deg":241.002},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-29 18:00:00"},{"dt":1501362000,"main":{"temp":292.134,"temp_min":292.134,"temp_max":292.134,"pressure":1007.08,"sea_level":1028.57,"grnd_level":1007.08,"humidity":75,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":12},"wind":{"speed":2.57,"deg":187.503},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-29 21:00:00"},{"dt":1501372800,"main":{"temp":290.813,"temp_min":290.813,"temp_max":290.813,"pressure":1006.99,"sea_level":1028.56,"grnd_level":1006.99,"humidity":84,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.56,"deg":189.001},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-30 00:00:00"},{"dt":1501383600,"main":{"temp":288.243,"temp_min":288.243,"temp_max":288.243,"pressure":1006.91,"sea_level":1028.43,"grnd_level":1006.91,"humidity":93,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":12},"wind":{"speed":1.56,"deg":179.501},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-30 03:00:00"},{"dt":1501394400,"main":{"temp":294.395,"temp_min":294.395,"temp_max":294.395,"pressure":1007.42,"sea_level":1028.78,"grnd_level":1007.42,"humidity":80,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":32},"wind":{"speed":2.22,"deg":195.002},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-30 06:00:00"},{"dt":1501405200,"main":{"temp":296.493,"temp_min":296.493,"temp_max":296.493,"pressure":1007.75,"sea_level":1028.96,"grnd_level":1007.75,"humidity":76,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":92},"wind":{"speed":4.91,"deg":222.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-30 09:00:00"},{"dt":1501416000,"main":{"temp":296.107,"temp_min":296.107,"temp_max":296.107,"pressure":1007.33,"sea_level":1028.47,"grnd_level":1007.33,"humidity":75,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":88},"wind":{"speed":3.77,"deg":226.001},"rain":{"3h":0.06},"sys":{"pod":"d"},"dt_txt":"2017-07-30 12:00:00"},{"dt":1501426800,"main":{"temp":296.839,"temp_min":296.839,"temp_max":296.839,"pressure":1005.65,"sea_level":1026.87,"grnd_level":1005.65,"humidity":86,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":8},"wind":{"speed":4.3,"deg":177.001},"rain":{"3h":0.36},"sys":{"pod":"d"},"dt_txt":"2017-07-30 15:00:00"},{"dt":1501437600,"main":{"temp":297.131,"temp_min":297.131,"temp_max":297.131,"pressure":1004.82,"sea_level":1026.07,"grnd_level":1004.82,"humidity":77,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.86,"deg":204.007},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-30 18:00:00"},{"dt":1501448400,"main":{"temp":292.741,"temp_min":292.741,"temp_max":292.741,"pressure":1004.96,"sea_level":1026.36,"grnd_level":1004.96,"humidity":88,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":20},"wind":{"speed":2.24,"deg":204.005},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-30 21:00:00"},{"dt":1501459200,"main":{"temp":291.918,"temp_min":291.918,"temp_max":291.918,"pressure":1005.3,"sea_level":1026.73,"grnd_level":1005.3,"humidity":89,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":56},"wind":{"speed":3.21,"deg":216.001},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-31 00:00:00"},{"dt":1501470000,"main":{"temp":291.184,"temp_min":291.184,"temp_max":291.184,"pressure":1006.45,"sea_level":1027.94,"grnd_level":1006.45,"humidity":94,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":32},"wind":{"speed":3.22,"deg":250.008},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-31 03:00:00"},{"dt":1501480800,"main":{"temp":294.054,"temp_min":294.054,"temp_max":294.054,"pressure":1007.57,"sea_level":1028.94,"grnd_level":1007.57,"humidity":85,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":44},"wind":{"speed":3.11,"deg":261.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-31 06:00:00"},{"dt":1501491600,"main":{"temp":297.594,"temp_min":297.594,"temp_max":297.594,"pressure":1008.85,"sea_level":1030.22,"grnd_level":1008.85,"humidity":83,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":32},"wind":{"speed":3.76,"deg":264.504},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-31 09:00:00"},{"dt":1501502400,"main":{"temp":299.143,"temp_min":299.143,"temp_max":299.143,"pressure":1009.56,"sea_level":1030.8,"grnd_level":1009.56,"humidity":75,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.41,"deg":256.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-31 12:00:00"},{"dt":1501513200,"main":{"temp":299.15,"temp_min":299.15,"temp_max":299.15,"pressure":1009.44,"sea_level":1030.67,"grnd_level":1009.44,"humidity":68,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.41,"deg":258},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-31 15:00:00"},{"dt":1501524000,"main":{"temp":297.129,"temp_min":297.129,"temp_max":297.129,"pressure":1009.75,"sea_level":1031.07,"grnd_level":1009.75,"humidity":77,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":1.51,"deg":222.51},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-31 18:00:00"},{"dt":1501534800,"main":{"temp":292.403,"temp_min":292.403,"temp_max":292.403,"pressure":1010.68,"sea_level":1032.06,"grnd_level":1010.68,"humidity":87,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":0.46,"deg":100.002},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-31 21:00:00"},{"dt":1501545600,"main":{"temp":291.274,"temp_min":291.274,"temp_max":291.274,"pressure":1010.81,"sea_level":1032.35,"grnd_level":1010.81,"humidity":86,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":2.46,"deg":109.003},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-08-01 00:00:00"},{"dt":1501556400,"main":{"temp":289.609,"temp_min":289.609,"temp_max":289.609,"pressure":1010.63,"sea_level":1032.14,"grnd_level":1010.63,"humidity":88,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.4,"deg":96.5014},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-08-01 03:00:00"},{"dt":1501567200,"main":{"temp":296.248,"temp_min":296.248,"temp_max":296.248,"pressure":1010.53,"sea_level":1031.83,"grnd_level":1010.53,"humidity":85,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":3.96,"deg":129.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-08-01 06:00:00"},{"dt":1501578000,"main":{"temp":301.148,"temp_min":301.148,"temp_max":301.148,"pressure":1008.97,"sea_level":1030.17,"grnd_level":1008.97,"humidity":74,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":12},"wind":{"speed":6.06,"deg":137.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-08-01 09:00:00"},{"dt":1501588800,"main":{"temp":304.321,"temp_min":304.321,"temp_max":304.321,"pressure":1007.02,"sea_level":1028.06,"grnd_level":1007.02,"humidity":63,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":12},"wind":{"speed":6.01,"deg":167.505},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-08-01 12:00:00"},{"dt":1501599600,"main":{"temp":298.425,"temp_min":298.425,"temp_max":298.425,"pressure":1005.28,"sea_level":1026.4,"grnd_level":1005.28,"humidity":87,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":24},"wind":{"speed":6.26,"deg":187.017},"rain":{"3h":2.3875},"sys":{"pod":"d"},"dt_txt":"2017-08-01 15:00:00"},{"dt":1501610400,"main":{"temp":299.732,"temp_min":299.732,"temp_max":299.732,"pressure":1004.42,"sea_level":1025.52,"grnd_level":1004.42,"humidity":66,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":0},"wind":{"speed":6.3,"deg":198.001},"rain":{"3h":0.575},"sys":{"pod":"d"},"dt_txt":"2017-08-01 18:00:00"},{"dt":1501621200,"main":{"temp":297.744,"temp_min":297.744,"temp_max":297.744,"pressure":1004.87,"sea_level":1026.06,"grnd_level":1004.87,"humidity":65,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":5.56,"deg":187.001},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-08-01 21:00:00"}],"city":{"id":3093133,"name":"Lodz","coord":{"lat":51.75,"lon":19.4667},"country":"PL"}};
        const dayForecast = [];

        for (let i = 4; i >= 0; i--) {
            dayForecast[i] = response1.list.splice(Math.max(0,response1.list.length - 8), 8);
            dayForecast[i].weekday = dayNames[new Date(dayForecast[i][0].dt_txt).getDay()];
            dayForecast[i].date = months[new Date(dayForecast[i][0].dt_txt).getMonth()] + ' ' +
                new Date(dayForecast[i][0].dt_txt).getDate() + ', ' +
                (1900 + new Date(dayForecast[i][0].dt_txt).getYear());
        }
        this.setState({
            now: response,
            dayForecast: dayForecast
        })
    }

    render() {
        return (
            <div className={"weather " + (this.state.now && (this.state.now.dt - this.state.now.sys.sunset) > 0 ? 'night' : 'day')}>
                <div className="container">
                    <div className="main-title">5 day forecast</div>
                    {this.state.now &&
                    <div className="current-weather">
                        <div className="today">
                            {this.state.dayForecast && <div className="date">{this.state.dayForecast[0].date}</div>}
                            <div className="location">Lodz, Poland</div>
                            <div className="temperature">
                                <i className="fa fa-thermometer-full" aria-hidden="true"></i>&nbsp;
                                {(this.state.now.main.temp - 273.15).toFixed(0)}&deg;C
                            </div>
                        </div>
                        <div className="image">
                            <div className={'weather-icon ' +  this.state.now.weather[0].main}></div>
                        </div>
                        <div className="details">
                            <div><span className="title">Humidity:</span> {this.state.now.main.humidity}&nbsp;%</div>
                            <div><span className="title">Pressure:</span> {this.state.now.main.pressure}&nbsp;hPa</div>
                            <div><span className="title">Wind:</span> {this.state.now.wind.speed}&nbsp;m/s</div>
                            <div><span className="title">Sunrise:</span> {this.state.now.sys.sunriseDate}</div>
                            <div><span className="title">Sunset:</span> {this.state.now.sys.sunsetDate}</div>
                        </div>
                    </div>
                    }

                    <div className="forecast">
                        {this.state.now && this.state.dayForecast && this.state.dayForecast.map((day, index) => {
                            if (index === 0) {
                                return (
                                    <div className="day" key={index}>
                                        <div className="week-day">{day.weekday}</div>
                                        <div className="temperature"><i className="fa fa-thermometer-full" aria-hidden="true"></i>&nbsp;
                                            {(this.state.now.main.temp - 273.15).toFixed(0)}&deg;C</div>
                                        <div className={'weather-icon ' + this.state.now.weather[0].main}></div>
                                        <div className="description">{this.state.now.weather[0].description}</div>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div className="day" key={index}>
                                        <div className="week-day">{day.weekday}</div>
                                        <div className="temperature"><i className="fa fa-thermometer-full" aria-hidden="true"></i>&nbsp;
                                            {(day[4].main.temp - 273.15).toFixed(0)}&deg;C</div>
                                        <div className={'weather-icon ' + day[4].weather[0].main}></div>
                                        <div className="description">{day[4].weather[0].description}</div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = CurrentWeather;