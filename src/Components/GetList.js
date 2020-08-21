import React, { Component } from 'react';
import axios from 'axios';

class GetList extends Component{
    constructor(props){
        super(props)
        this.state = {
            posts:[],
            error:''
        }
    }
    componentDidMount(){
        console.log("CDM")
        axios.get("https://jsonplaceholder.typicode.com/postshdydhhd")
        .then(response => this.setState({posts:response.data}))
        .catch(errorlog => this.setState({error:errorlog}))
    }

    render(){
        const {posts} = this.state
    return <><p>Api Call data</p>
        {posts.length? posts.map((post) => <h1 key={post.id}>{post.title}</h1>): null}
        {this.state.error && <h1>Error</h1>}
        </>
}
}

export default GetList