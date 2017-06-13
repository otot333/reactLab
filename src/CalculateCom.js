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
           operand:"+",
           log:[{operand:'+',value:'2'}]
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
        log.push({operand:operand,value:val});
        this.setState({result:result,log:log});
        
    }

    DecidedOperator(val)
    {
        var {operand} = this.state;
        this.setState({operand:val});        
    }

    DelAct(op,val)
    {
        alert(op);
    }
    
    render() {
        return (
            <div>
                <div style={{display: 'inline-block'}}>
                    <input type="button" value="1" style={divStyle} onClick={(e) => this.AddResult(1)}/>
                    <input type="button" value="2" style={divStyle} onClick={(e) => this.AddResult(2)}/>
                    <input type="button" value="3" style={divStyle} onClick={(e) => this.AddResult(3)}/>
                    <input type="button" value="+" style={divStyle} onClick={(e) => this.DecidedOperator('+',0)}/>
                    <input type="button" value="-" style={divStyle} onClick={(e) => this.DecidedOperator('-',0)}/>                   
                </div>
                <div style={{display: 'inline-block'}}>
                 <ResultCom result={this.state.result} />
                </div> 
                
                <div>
                    <span>Log History</span>
                    <LogCom log={this.state.log} delAct={this.DelAct}/>
                </div>
            </div>           
        )
    }
}

module.exports = CalculateCom;