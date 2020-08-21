import React, { Component } from 'react';
import withCounter from './withCounter'
class HoveredComponent extends Component{
    render(){
        return <><div onMouseOver = {this.props.handleCounterChange}>Hover over me</div>
                {this.props.count}</>
    }
}

export default withCounter(HoveredComponent)