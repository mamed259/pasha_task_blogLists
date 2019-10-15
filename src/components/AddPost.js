import React, { Component } from 'react';
import axios from 'axios';

export default class PersonList extends Component {
    state = {
        title: '',
        text: ''
    };

    handleChange = event => {
        this.setState({ title: event.target.value, text: event.target.value, });
    };

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            title: this.state.text,
            text: this.state.text
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" name="title" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Text:</label>
                        <input type="text" name="text" onChange={this.handleChange} />
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}
