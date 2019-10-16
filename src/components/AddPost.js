import React, { Component } from 'react';
import axios from 'axios';

export default class PersonList extends Component {
    state = {
        title: '',
        text: '',
        status: false,
        loading: false,
    };

    handleChangeTitle = event => {
        this.setState({ title: event.target.value});
    };

    handleChangeText = event => {
        this.setState({ text: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            title: this.state.title,
            text: this.state.text
        };


        this.setState({ loading: true });
        axios.post(`https://jsonplaceholder.typicode.com/posts`, user)
            .then(res => {
                console.log(res.data);
                this.setState({ loading: false });
                this.setState({ status: true });
                if (this.state.status){
                    this.setState({ title: '', text: ''});
                }
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
                        <input
                            type="text"
                            placeholder="Add title..."
                            name="title"
                            onChange={this.handleChangeTitle}
                            value={this.state.title}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Text</label>
                        <input type="text"
                               placeholder="Add text..."
                               name="text"
                               onChange={this.handleChangeText}
                               value={this.state.text}
                               required
                        />
                    </div>
                    <button type="submit">Submit</button>
                    <div className={ this.state.loading ? 'loader' : 'hidden'}>
                    </div>
                </form>
                <div className={ this.state.status ? 'show-success' : 'hidden'}>
                    Successful!
                </div>
            </div>
        )
    }
}
