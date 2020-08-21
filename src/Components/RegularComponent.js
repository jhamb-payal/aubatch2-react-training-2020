import React, { Component } from 'react';

class RegularComponent extends Component {
    // constructor(props)
    // {
    //     super(props)
    // }

    render(){
        console.log("regular render")
        return <h1>Regular RegularComponent {this.props.name}</h1>
    }
}

export default RegularComponent