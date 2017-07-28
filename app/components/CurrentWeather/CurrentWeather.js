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

        api.getCurrentWeather()
            .then(function(response){
                response.sys.sunriseDate = new Date(response.sys.sunrise*1000).getHours() + ':' + new Date(response.sys.sunrise*1000).getMinutes();
                response.sys.sunsetDate = new Date(response.sys.sunset*1000).getHours() + ':' + new Date(response.sys.sunset*1000).getMinutes();
                this.setState({
                    now: response
                });
            }.bind(this));


        api.getForecast()
            .then(function(response){
                const dayForecast = [];

                for (let i = 4; i >= 0; i--) {
                    dayForecast[i] = response.list.splice(Math.max(0,response.list.length - 8), 8);
                    dayForecast[i].weekday = dayNames[new Date(dayForecast[i][0].dt_txt).getDay()];
                    dayForecast[i].date = months[new Date(dayForecast[i][0].dt_txt).getMonth()] + ' ' +
                        new Date(dayForecast[i][0].dt_txt).getDate() + ', ' +
                        (1900 + new Date(dayForecast[i][0].dt_txt).getYear());
                }
                this.setState({
                    dayForecast: dayForecast
                })
            }.bind(this));
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