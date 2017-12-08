import {createStore} from 'redux';

import expect from 'expect';

import * as courseActions from '../actions/courseActions';
import initialState from '../reducers/initialState';
import rootReducer from '../reducers';

describe('Store', () => {
  it('should handle creating courses', () => {
    // arrange
    const store = createStore(rootReducer, initialState);

    const course = {
      title: "Clean Code"
    };

    // act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    const course2 = {
      title: "New Code"
    };

    // act
    const action2 = courseActions.createCourseSuccess(course2);
    store.dispatch(action2);

    // assert
    const actual = store.getState().courses[0];
    const expected = {
      title: "Clean Code"
    };
    expect(actual).toEqual(expected);
    const actual2 = store.getState().courses[1];
    const expected2 = {
      title: "New Code"
    };
    expect(actual2).toEqual(expected2);
  });
});
