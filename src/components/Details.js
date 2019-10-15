import React, { Component } from 'react';
import axios from 'axios';

class Details extends Component {
    state = {
        post: {
            title: null,
            body: null
        }
    };

    componentDidMount() {
        this.loadData(this.props.match.params.id);
    }

    loadData = id => {
        axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(res => {
                const item = res.data;
                //console.log(persons);
                this.setState({ post: item });
            })
    };

    render() {
        return (
            <div className="about-post">
                <h1>{this.state.post.title}</h1>
                <p>{this.state.post.body}</p>
            </div>
        )
    }
}

export default Details;
