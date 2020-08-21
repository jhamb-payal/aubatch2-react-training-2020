import React, { Component } from 'react';
import { Greet } from './Greet';
import Welcome from './Welcome';

class Employee extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            age: '',
            address: ''
        }
    }

    handleChange = (event) => {
        console.log("handlechange called", event.target.value)
        this.setState({name: event.target.value})
    }

    handleAddressChange = (event) => {
        this.setState({address: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert(`${this.state.name} ${this.state.address}`)

    }
    render() {
        return <>
        <form onSubmit= {this.handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" value = {this.state.name} onChange = {this.handleChange}></input>
            </div>
            <div>
                <label>Address:</label>
                <textarea value = {this.state.address} onChange = {this.handleAddressChange}></textarea>
            </div>
            <button>submit</button>
        </form>
        <Greet name = {this.state.name}>
            <h1>Accolite Training</h1>
        </Greet>
        <Welcome data = {this.state} />
        </>
    }
}

export default Employee