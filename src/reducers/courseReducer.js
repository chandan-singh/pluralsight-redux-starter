import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      //debugger
      return action.course;
      // return [...state,
      //   Object.assign({}, action.course)
      // ];

    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id != action.course.id),
        Object.assign({}, action.course)
      ];

    default:
      //debugger
      return state;
  }
}
