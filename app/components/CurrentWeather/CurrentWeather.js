import React from 'react';

import api from '../../utils/api';

class CurrentWeather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            now: null,
            forecast: null
        };
    }
    componentDidMount(){
        api.getCurrentWeather()
            .then(function(response){
                console.log(response);
                this.setState({
                    now: response
                });
            }.bind(this));
        api.getForecast()
            .then(function(response){
                console.log(response);
                this.setState({
                    forecast: response
                });
            }.bind(this));
    }

    render() {
        return (
            <div className={"weather " + (this.state.now && (this.state.now.dt - this.state.now.sys.sunset) > 0 ? 'night' : 'day')}>
                <div className="container">
                    <div className="current-weather">
                        <div>
                            {this.state.now && this.state.now.weather[0].main === 'Clear' && <i className="fa fa-sun-o animated" aria-hidden="true"></i>}
                            {this.state.now && this.state.now.weather[0].main === 'Clouds' && <i className="fa fa-cloud animated" aria-hidden="true"></i>}
                            {this.state.now && this.state.now.weather[0].main === 'Rain' && <i className="fa fa-shower animated" aria-hidden="true"></i>}
                            {this.state.now && this.state.now.weather[0].main === 'Snow' && <i class="fa fa-snowflake-o animated" aria-hidden="true"></i>}
                            {this.state.now && this.state.now.weather[0].main === 'Storm' && <i class="fa fa-bolt animated" aria-hidden="true"></i>}
                        </div>
                        <div>
                            <i className="fa fa-thermometer-full" aria-hidden="true"></i>&nbsp;
                            {this.state.now && (this.state.now.main.temp - 273.15).toFixed(0)}&deg;C
                        </div>
                    {this.state.now && <div>{this.state.now.dt - this.state.now.sys.sunset}</div>}
                    {this.state.now && <div>{this.state.now.dt - this.state.now.sys.sunrise}</div>}
                    </div>

                    <div className="forecast">
                        {this.state.forecast && this.state.forecast.list.map(weather => {
                            return (
                                <div className="item" key={weather.dt}>
                                    <div>{weather.weather[0].description}
                                        {weather.weather[0].main === 'Clear' && <i className="fa fa-sun-o" aria-hidden="true"></i>}
                                        {weather.weather[0].main === 'Clouds' && <i className="fa fa-cloud" aria-hidden="true"></i>}
                                        {weather.weather[0].main === 'Rain' && <i className="fa fa-shower" aria-hidden="true"></i>}
                                        {weather.weather[0].main === 'Snow' && <i class="fa fa-snowflake-o" aria-hidden="true"></i>}
                                        {weather.weather[0].main === 'Storm' && <i class="fa fa-bolt" aria-hidden="true"></i>}
                                    </div>
                                    <div>{weather.dt_txt.split(' ')[1].substring(0,5)}</div>
                                    <div>
                                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>&nbsp;
                                        {(weather.main.temp - 273.15).toFixed(0)}&deg;C
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = CurrentWeather;