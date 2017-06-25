import React, { Component } from 'react';
import NewCalculateCom from './NewCalculateCom';

class App extends Component {
    render() {
        return (
            <div>
                Hello, Redux.
                <NewCalculateCom />
            </div>
        )
    }
}



module.exports = App;