import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <div className="greetings">
                    <i className="fa fa-child welcome" aria-hidden="true"></i>
                    <h1>Hello World!</h1>
                </div>
                <p>This is simple react app designed for easy development and production.</p>
                <p>Webpack is building HTML, SCSS, React using Babel, Images, Fonts, Font-awesome Icons and push compiled & minified files to production folder 'dist'. Firebase hosting is available as well.</p>
            </div>
        )
    }
}

module.exports = HelloWorld;