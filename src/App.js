import React, { Component } from 'react';
import NewCalculateCom from './NewCalculateCom';
import { connect } from 'react-redux';
import action from './Action';

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