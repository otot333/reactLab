import React, { Component } from 'react';
import { connect } from 'react-redux';
import action from './action';
import store from './store';
const divStyle = {
  width: '50px',
  margin:'5px',
};

const NewCalculateCom = ({
    result,
    plus,
    minus
}) =>
{
    return (
            <div>
                <div style={{display: 'inline-block'}}>
                    <input type="button" value="1" style={divStyle} onClick={plus}/>
                    <input type="button" value="2" style={divStyle} onClick={minus}/>
                    <input type="button" value="3" style={divStyle} />
                    <input type="button" value="+" style={divStyle} />
                    <input type="button" value="-" style={divStyle} onClick={PrintStore}/>                   
                </div>
                <div style={{display: 'inline-block'}}>
                     {result}
                </div> 
            </div>    

    )

}

const mapStateToProps = (state) => {
    return { result: state };
}
const mapDispatchToProps = (dispatch) => ({
    plus: () => dispatch(action.PLUS()),
    minus: () => dispatch(action.MINUS())
});

const PrintStore = ()=>
{
   console.log(store.getState());
}


module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCalculateCom);
