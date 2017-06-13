import React, { Component } from 'react';

const divStyle = {
  width: '50px',
  margin:'5px',
};
class Buttons extends Component {   

    constructor(props) {
        super(props);
    }
    render() {
        const { value, onClickBtn } =this.props;
        return ( <input type="button" value={value} style={divStyle} onClick={() => onClickBtn(value)} />
        )
    }
}

module.exports = Buttons;