import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddPost from './components/AddPost';
import List from './components/List';
import Details from './components/Details';

export class App extends Component {

  render() {
    return (
        <Router>
          <div>
            <ul className="router-list">
              <li>
                <Link to={'/'} className="nav-link">List</Link>
              </li>
              <li>
                <Link to={'/add-post'} className="nav-link">Add Post</Link>
              </li>
            </ul>

            <Switch>
              <Route exact path='/' component={List} />
              <Route path='/add-post' component={AddPost} />
              <Route path='/:id/details' component={Details} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;

