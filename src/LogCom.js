import React, { Component } from 'react';
import { connect } from 'react-redux';
import action from './action';
import store from './store';

const spanStyle = {
  width: '50px',
  margin:'5px',
};


class LogCom extends Component {
    render() {
        const {revertLog} = this.props;
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
                                {this.props.history.map((val, index ) => (
                                    <tr key={index.toString()}>
                                        <td style={{ border : '1px solid black', borderCollapse:'collapse'}}>{val.opt}</td>
                                        <td style={{ border : '1px solid black', borderCollapse:'collapse'}}>{val.val}</td>   
                                        <td><input type="button" value="del"  onClick={()=>revertLog(val.opt, val.val, index)}/> </td>
                                    </tr>
                                ))}      
                        </tbody>
                </table>
            </div>           
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => ({
    revertLog: (opt,val,index) => dispatch(action.REVERTLOG(opt,val,index)),
});

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogCom);


