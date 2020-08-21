import React, { Component } from 'react';

class ChildComponent extends Component {
    render() {
        return <button onClick = {this.props.handleWelcome}>Welcome</button>
    }
}

export default ChildComponent