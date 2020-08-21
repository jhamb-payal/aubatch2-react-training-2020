import React, { Component } from 'react';

class LifeCycleB extends Component {
    constructor(props){
        super(props)
        console.log("B constructor")
        this.state = {
            name:''
        }
    }

    static getDerivedStateFromProps(){
        console.log("B gDSFP")
        return null
    }

    componentDidMount() {
        console.log("B CDM")
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("B SCU", nextState)
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("B gSbU")
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log("B CDU")
    }

    render() {
        console.log("B render")
        return <h1>LifecylceB</h1>
    }
}

export default LifeCycleB