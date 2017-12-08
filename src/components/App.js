import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React, { Component } from 'react';

import PropTypes from 'prop-types';

import AboutPage from './about/AboutPage';
import CoursesPage from './courses/CoursesPage';
import Header from './common/Header';
import HomePage from './home/HomePage';
import ManageCoursePage from './courses/ManageCoursePage'; // eslint-disable-line import/no-named-as-default

class App extends Component {

  render() {
    return (
      <div>
        <div className="container-fluid">
          <Header
            loading={this.props.loading}
            />
          {this.props.children}
        </div>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/courses" component={CoursesPage} />
          <Route exact path="/course" component={ManageCoursePage} />
          <Route path="/course/:id" component={ManageCoursePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
  loading: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default withRouter(connect(mapStateToProps)(App));
