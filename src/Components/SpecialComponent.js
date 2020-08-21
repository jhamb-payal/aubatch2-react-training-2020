import React, { PureComponent } from 'react';

class SpecialComponent extends PureComponent {
    // constructor(props){
    //     super(props)
    // }

    render() {
        console.log("special render")
    return <h1>Special PureComponent {this.props.name}</h1>
    }
}

export default SpecialComponent