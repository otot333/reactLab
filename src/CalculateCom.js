import React, { Component } from 'react';
import ResultCom from './ResultCom';
import LogCom from './LogCom';

const divStyle = {
  width: '50px',
  margin:'5px',
};

class CalculateCom extends Component {   
    constructor(props){
        super(props);
        this.state = {
           buttonValue:[0,0,0],
           result:0,
           operand:"1",
           log:[{"1":123}]
        };
    }
    
    AddResult(val)
    {
        var {result} = this.state;
        var {operand} = this.state;
        if(operand == '+')
        {
            result = result + parseInt(val);
        }
        if(operand == '-')
        {
            result = result - parseInt(val);
        }
        var {log} = this.state;
        log.push({operand:val});
        this.setState({result:result,log:log});
        
    }

    DecidedOperator(val)
    {
        var {operand} = this.state;
        this.setState({operand:val});        
    }
    
    render() {
        return (
            <div>
                <div style={{display: 'inline-block'}}>
                    <input type="button" value="1" style={divStyle} onClick={(e) => this.AddResult(1,0)}/>
                    <input type="button" value="2" style={divStyle} onClick={(e) => this.AddResult(2,0)}/>
                    <input type="button" value="3" style={divStyle} onClick={(e) => this.AddResult(3,0)}/>
                    <input type="button" value="+" style={divStyle} onClick={(e) => this.DecidedOperator('+',0)}/>
                    <input type="button" value="-" style={divStyle} onClick={(e) => this.DecidedOperator('-',0)}/>                   
                </div>
                <div style={{display: 'inline-block'}}>
                 <ResultCom result={this.state.result} />
                </div> 
                
                <div>
                    <span>Log History</span>
                    <LogCom log={this.state.log} />
                </div>
            </div>           
        )
    }
}

module.exports = CalculateCom;