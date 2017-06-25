import React, { Component } from 'react';
import CalculateCom from './CalculateCom';

const spanStyle = {
  width: '50px',
  margin:'5px',
};

class ResultCom extends Component {
    render() {
        return (
            <div>
                         
                <div style={{display: 'inline-block'}}><span style={spanStyle} ></span></div>
            </div>           
        )
    }
}

module.exports = ResultCom;