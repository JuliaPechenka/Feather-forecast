import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HelloWorld from './HelloWorld/HelloWorld';

const App = props => {
    return (
        <Router>
            <div>
                <div className="container">
                    <Switch>
                        <Route exact path='/' component={HelloWorld} />
                    </Switch>
                </div>
            </div>
        </Router>
)
};

module.exports = App;