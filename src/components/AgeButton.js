import React , { Component } from 'react';

class AgeButton extends Component {
    render() {
        return(
            <button onClick={ ()=> this.props.age+=1 }>Click Me</button>
        );
    }
}

export default AgeButton;