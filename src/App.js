import React, { Component } from 'react';
import CalculateCom from './CalculateCom';

class App extends Component {
    render() {
        return (
            <div>
                Hello, World.
                <CalculateCom />
            </div>
        )
    }
}

module.exports = App;