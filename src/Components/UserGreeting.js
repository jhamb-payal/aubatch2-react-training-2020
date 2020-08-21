import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false,
            counter: 0
        }
    }
    handleClick = () => {
        this.setState((prevState) => ({isLoggedIn:!prevState.isLoggedIn}))
    }
    render() {
        // if(this.state.isLoggedIn) {
        //     return <>
        //         <h1>Hello Kanika</h1>
        //         <button onClick={this.handleClick}>LogOut</button>
        //     </> 
        // }
        // else {
        //     return <><h1>Hello Visitor</h1>
        //     <button onClick = {this.handleClick}>log In</button></>
        // }
        // return (this.state.isLoggedIn ? <>
        //         <h1>Hello Kanika</h1>
        //         <button onClick={this.handleClick}>LogOut</button>
        //     </> : 
        //      <>
        //      <h1>Hello Visitor</h1>
        //      <button onClick = {this.handleClick}>log In</button>
        //      </>
        // )

        return <>
        <button onClick = {this.handleClick}>Click me</button>
        {this.state.isLoggedIn && <h1>Hello World</h1>}
        </>
    }
}

export default UserGreeting