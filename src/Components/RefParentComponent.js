import React, { Component } from 'react';
import RefChildComponent from './RefChildComponent';

class RefParentComponent extends Component {
    constructor(props){
        super(props)
        this.parentComponentRef  = React.createRef()
    }
    componentDidMount(){
        console.log(this.parentComponentRef)
        this.parentComponentRef.current.focus();
    }
    render()
    {
        return <RefChildComponent ref = {this.parentComponentRef}/>
            
    }
}

export default RefParentComponent