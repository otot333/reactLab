import React, { Component } from 'react';

const spanStyle = {
  width: '50px',
  margin:'5px',
};

class LogCom extends Component {
    render() {
        return (
            <div>  
                <table style={{ border : '1px solid black', borderCollapse:'collapse'}}>
                    <thead>
                        <tr>
                            <th style={{ border : '1px solid black', borderCollapse:'collapse'}}>Operand</th>
                            <th style={{ border : '1px solid black', borderCollapse:'collapse'}}>Value</th>        
                            <th>{this.props.log.length}</th>                   
                        </tr>
                    </thead>
                        <tbody>
                                {this.props.log.map((val, index ) => {
                                    <tr>
                                        <td>123</td>
                                    </tr>
                                })}
                                
                               
                        </tbody>
                </table>
            </div>           
        )
    }
}

module.exports = LogCom;

