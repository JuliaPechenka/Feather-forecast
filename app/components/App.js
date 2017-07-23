import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CurrentWeather from './CurrentWeather/CurrentWeather';

const App = props => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={CurrentWeather} />
            </Switch>
        </Router>
)
};

module.exports = App;