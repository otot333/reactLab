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
    state:{
        value,
        history
    },
    calValue,
    changeOpt,    
    gethistory,
    saveHistory
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
                    <input type="button" value="GetHistory" style={{width:'100px'}}  onClick={()=>gethistory()}/>    
                    <input type="button" value="SaveHistory" style={{width:'100px'}}  onClick={()=>saveHistory()}/>    
                </div>
                <div style={{display: 'inline-block',margin: '5px 5px'}}>
                     <span>{value}</span>
                </div>
                 <LogCom />
            </div>  
    )
}
const mapStateToProps = (state) => {
    return {state};
}
const mapDispatchToProps = (dispatch) => ({
    calValue: (val) => dispatch(action.CALVALUE(val)),
    changeOpt: (opt) => dispatch(action.CHANGEOPT(opt)),
    gethistory: () => dispatch(action.fetchHistory()),
    saveHistory: () => dispatch(action.saveHistory())
});

const PrintStore = ()=>
{
   console.log(store.getState());
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCalculateCom);
