import React, { Component } from 'react';
import Person from './Person';

class DemoList extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            names: ["Joy", "Mark", "John", "Jay"],
            persons : [{
                id:'1',
                name:'karan',
                age: '24'
            },
        {
            id:'2',
            name:'Ram',
            age: '25'
        }]
        }
    }
    render(){
        return <ul>
            {this.state.persons.map((item) => <Person key = {item.id} item = {item}></Person>)}
            </ul>

    }
}

export default DemoList