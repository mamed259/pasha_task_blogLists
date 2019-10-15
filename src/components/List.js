import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import {Link} from "react-router-dom";

class List extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                const persons = res.data;
                //console.log(persons);
                this.setState({ persons });
            })
    }

    render() {
        return (
            <ul className= "user-list">
                { this.state.persons.map(person =>
                    <li key={person.id}>
                        <Link to={`${person.id}/details`} className="nav-link">
                            <h2>{person.title}</h2>
                            <span>{person.body.slice(0, 150)}</span>
                        </Link>
                    </li>
                )}
            </ul>
        )
    }
}

export default List;
