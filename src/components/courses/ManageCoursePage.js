import {Redirect, withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import toastr from 'toastr';

import PropTypes from 'prop-types';

import {authorsFormattedForDropdown} from '../../selectors/selectors';
import CourseForm from './CourseForm';
import * as courseActions from '../../actions/courseActions';

export class ManageCoursePage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      // Populate form if course is directly populated
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  updateCourseState(event) {
    // this is needed to change the current state of the fields; else elements will not change
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  courseFormValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveCourse(event) {
    event.preventDefault();

    if (!this.courseFormValid()) {
      return;
    }

    this.setState({saving: true});
    // actions of props are coming from mapDispatchToProps which apeends all courseActions to props
    this.props.actions.saveCourse(this.state.course).then(() => {
      this.redirect();
    }).catch(error => {
      toastr.error(error);
      this.setState({saving: false});
    });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Course Saved');
    this.props.history.push('/courses');
  }

  render() {
    return (<CourseForm
      onChange={this.updateCourseState}
      onSave={this.saveCourse}
      course={this.state.course}
      errors={this.state.errors}
      allAuthors={this.props.authors}
      loading={this.state.saving}/>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  if (course.length)
    return course[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.match.params.id; // from the path `course/:id`
  // debugger;
  let course = {
    id: '',
    watchHref: '',
    title: '',
    authorId: '',
    length: '',
    category: ''
  };

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  return {
    course: course,
    authors: authorsFormattedForDropdown(state.authors)
  };
}

function mapDispatchToProps(dispatch) {
  //debugger
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage));
