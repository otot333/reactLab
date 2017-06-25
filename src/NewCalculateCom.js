import React, { Component } from 'react';


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
                    <input type="button" value="1" style={divStyle} />
                    <input type="button" value="2" style={divStyle} />
                    <input type="button" value="3" style={divStyle} />
                    <input type="button" value="+" style={divStyle} />
                    <input type="button" value="-" style={divStyle} />                   
                </div>
               
            </div>    

    )

}

module.exports = NewCalculateCom;

