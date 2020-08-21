import React, { Component } from 'react';

const withCounter = (WrappedComponent,number=10) => {
    class WithCounter extends Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }
        handleCounterChange = () => {
            this.setState((prevState) => ({count: prevState.count+number}))
        }
        render(){
            return <WrappedComponent handleCounterChange= {this.handleCounterChange} count={this.state.count} />
        }
    }
    return WithCounter
}

export default withCounter