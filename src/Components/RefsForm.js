import React, { Component } from 'react';

class RefsForm extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        this.inputRef2 = React.createRef();
    }

    componentDidMount() {
        console.log(this.inputRef, this.inputRef2);
        this.inputRef2.current.focus();
    }

    handleChange = () => {
        alert(this.inputRef.current.value);
    }
    render() {
        return <div><input type= "text" ref ={this.inputRef} name= "first"></input>
        <input type = "text" ref={this.inputRef2} name = "second"></input>
            <button onClick ={this.handleChange}>Click</button></div>
    }
}

export default RefsForm