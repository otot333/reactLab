import React, { Component } from 'react';

const spanStyle = {
  width: '50px',
  margin:'5px',
};


class LogCom extends Component {

    DelLog(op,val)
    {
        this.props.delAct(op,val);
    }

    render() {
        return (
            <div>  
                <table style={{ border : '1px solid black', borderCollapse:'collapse'}}>
                    <thead>
                        <tr>
                            <th style={{ border : '1px solid black', borderCollapse:'collapse'}}>Operand</th>
                            <th style={{ border : '1px solid black', borderCollapse:'collapse'}}>Value</th>        
                            <th></th>                   
                        </tr>
                    </thead>
                        <tbody>
                                {this.props.log.map((val, index ) => (
                                    <tr>
                                        <td style={{ border : '1px solid black', borderCollapse:'collapse'}}>{val.operand}</td>
                                        <td style={{ border : '1px solid black', borderCollapse:'collapse'}}>{val.value}</td>   
                                        <td><input type="button" value="del"  onClick={(e)=> this.DelLog(val.operand,val.value)}/> </td>
                                    </tr>
                                ))}
                                
                               
                        </tbody>
                </table>
            </div>           
        )
    }
}

module.exports = LogCom;

