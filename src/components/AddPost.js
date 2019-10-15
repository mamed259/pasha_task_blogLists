import React, { Component } from 'react';
import axios from 'axios';

export default class PersonList extends Component {
    state = {
        title: '',
        text: '',
        status: false,
        loading: false,
        hasErrorTitle: false,
        hasErrorText: false
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

        this.setState({ loading: true })
        axios.post(`https://jsonplaceholder.typicode.com/posts`, user)
            .then(res => {
                //console.log(res);
                console.log(res.data);
                this.setState({ loading: false })
            })
            .catch(err => {
                console.warn(err);
                this.setState({ loading: false })
            })
    };

    render() {
        return (
            <div>
                <form className="add-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" placeholder="Add title..." name="title" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Text</label>
                        <input type="text" placeholder="Add text..." name="text" onChange={this.handleChange} required/>
                    </div>
                    <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}
