import React, { Component } from 'react';
import ChildComponent from './ChildComponent'
import SpecialComponent from './SpecialComponent';
import RegularComponent from './RegularComponent';

class ParentComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Rakesh kumar',
            designation: 'Developer'
        }
    }
    componentDidMount(){
        console.log("Parent CDM")
        this.setState({designation:'Engineer'})
    }
    handleChange = (event) => {
        console.log(event.target)
        this.setState({name:event.target.value})
    }
    welcomeParent = () => {
        console.log(`Hello ${this.state.name}`)
    }
    render() {
        console.log("Parent render")
        return <>
        <input type = "text" value = {this.state.name} onChange={this.handleChange}></input>
        <ChildComponent handleWelcome = {this.welcomeParent} />
        <div>{this.state.name}</div>
        <SpecialComponent name = {this.state.designation}/>
        <RegularComponent name = {this.state.designation}/>
        </>
    }
}

export default ParentComponent