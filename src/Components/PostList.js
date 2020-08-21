import React, { Component } from 'react';
import axios from 'axios';
class PostList extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value}, () => console.log(this.state))
    }    
    
    handleSubmit = (event) => {
        event.preventDefault()
        console.log("submit clicked")
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    render() {
        const {userId, title, body} = this.state
        return <form onSubmit={this.handleSubmit}>
            <label>UserId</label>
            <input type = "text" name = "userId" value = {userId} onChange ={this.handleChange}></input>
            <label>Title</label>
            <input type = "text" name = "title" value = {title} onChange ={this.handleChange}></input>
            <label>Body</label>
            <input type = "text" name = "body" value = {body} onChange ={this.handleChange}></input>
            <button>Submit</button>
            </form>
    }

}

export default PostList