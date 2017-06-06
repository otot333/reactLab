import React, { Component } from 'react';
import ResultCom from './ResultCom';

const divStyle = {
  width: '50px',
  margin:'5px',
};
class CalculateCom extends Component {   

    state = {
        buttonValue:[0,0,0],
        result:0
    };

    changebutton1Value(event, idx)
    {
        const {buttonValue} = this.state;
        buttonValue[idx] = parseInt(event.target.value);
        this.calculateFun(buttonValue);        
    }

    calculateFun(val)
    {
        var num = val[0] + val[1] - val[2];
        this.setState({result:num});
    }

    render() {
        return (
            <div>
                <div style={{display: 'inline-block'}}>
                    <input type="text" value={this.state.buttonValue[0]} style={divStyle} onChange={(e)=>this.changebutton1Value(e, 0)}/>
                    <input type="button" value="+" style={divStyle} />
                    <input type="text"  value={this.state.buttonValue[1]} style={divStyle} onChange={(e)=>this.changebutton1Value(e, 1)}/>
                    <input type="button" value="-" style={divStyle} />
                    <input type="text" value={this.state.buttonValue[2]} style={divStyle} onChange={(e)=>this.changebutton1Value(e, 2)}/>
                </div>
                <div style={{display: 'inline-block'}}>
                 <ResultCom result={this.state.result} />
                </div>
            </div>           
        )
    }
}

module.exports = CalculateCom;