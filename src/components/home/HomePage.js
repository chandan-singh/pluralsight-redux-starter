import {Link} from 'react-router-dom';
import React, { Component } from 'react';

class HomePage extends Component {

  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">Administration</h1>
          <p className="lead">React Redux</p>
          <Link to="/about" className="btn btn-primary btn-log">Learn More</Link>
        </div>
      </div>
    );
  }

}

export default HomePage;
