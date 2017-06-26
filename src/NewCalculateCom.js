import React, { Component } from 'react';
import { connect } from 'react-redux';
import action from './action';
import store from './store';
import LogCom from './LogCom';


const divStyle = {
  width: '50px',
  margin:'5px',
};


const NewCalculateCom = ({
    calValue,
    changeOpt,
    value,
    history
}) =>
{
    return (
            <div>
                <div style={{display: 'inline-block'}}>
                    <input type="button" value="1" style={divStyle} onClick={() => calValue(1)}/>
                    <input type="button" value="2" style={divStyle} onClick={() => calValue(2)}/>
                    <input type="button" value="3" style={divStyle} onClick={() => calValue(3)}/>
                    <input type="button" value="+" style={divStyle} onClick={() => changeOpt('+')}/>       
                    <input type="button" value="-" style={divStyle} onClick={() => changeOpt('-')}/>                   
                </div>
                <div style={{display: 'inline-block'}}>
                     <span>{value}</span>
                </div>
                 <LogCom />
            </div>  
    )
}
const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => ({
    calValue: (val) => dispatch(action.CALVALUE(val)),
    changeOpt: (opt) => dispatch(action.CHANGEOPT(opt))
});

const PrintStore = ()=>
{
   console.log(store.getState());
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCalculateCom);
