import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props){
        super(props)
        console.log("A constructor")
        this.state = {
            name:''
        }
    }

    static getDerivedStateFromProps(){
        console.log("A gDSFP")
        return null
    }

    handleClick = () => {
        this.setState({name:'Kanika'})
    }
    componentDidMount() {
        console.log("A CDM")
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log("A SCU", nextState)
    //     return false 
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("A gSbU")
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log("A CDU")
    }
    render() {
        console.log("A render")
        return <>
        <h1>LifecylceA {this.state.name}</h1>
        <button onClick = {this.handleClick}>Click me</button>
        <LifeCycleB/></>
    }
}

export default LifeCycleA