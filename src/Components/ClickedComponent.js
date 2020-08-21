import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickedComponent extends Component {
    render() {
        return <>
            <button onClick={this.props.handleCounterChange}>Click Me</button>
            {this.props.count}</>
    }
}

export default withCounter(ClickedComponent,5)