import React, { Component } from 'react';
import ResultCom from './ResultCom';

const divStyle = {
  width: '50px',
  margin:'5px',
};

class CalculateCom extends Component {   

    state = {
        bu1:0,
        bu2:0,
        bu3:0,
        result:0
    };

    changebutton1Value(event)
    {
        this.setState({bu1: event.target.value}); 
        this.calculateFun();        
    }

    changebutton2Value(event)
    {
        this.setState({bu2:  event.target.value});
        this.calculateFun();
    }

    changebutton3Value(event)
    {
        this.setState({bu3:  event.target.value});
        this.calculateFun();
    }

    calculateFun()
    {
        console.log(this.state.bu1);
        console.log(this.state.bu2);
        console.log(this.state.bu3);
        var num = this.state.bu1 + this.state.bu2 - this.state.bu3;
        console.log(num);
        this.setState({result:num});
    }

    render() {
        return (
            <div>
                <div style={{display: 'inline-block'}}>
                    <input type="text" value={this.state.bu1} style={divStyle} onChange={this.changebutton1Value.bind(this)}/>
                    <input type="button" value="+" style={divStyle} />
                    <input type="text"  value={this.state.bu2} style={divStyle} onChange={this.changebutton2Value.bind(this)}/>
                    <input type="button" value="-" style={divStyle} />
                    <input type="text" value={this.state.bu3} style={divStyle} onChange={this.changebutton3Value.bind(this)}/>
                </div>
                <div style={{display: 'inline-block'}}>
                 <ResultCom result={this.state.result} />
                </div>
            </div>           
        )
    }
}

module.exports = CalculateCom;