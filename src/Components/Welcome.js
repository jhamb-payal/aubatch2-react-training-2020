import React, { Component } from 'react';
import { Greet } from './Greet';

class Welcome extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: 'Payal'
        }
    }
    render() {
        console.log(this.props.data.name)
        const {name} = this.props.data
        return <>
                <Greet name = "Rahul"/>    
                <h1>React Training with {name}</h1>
                <div>Topic : Components</div>
                </>
    }
}
export default Welcome