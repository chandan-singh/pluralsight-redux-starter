import thunk from 'redux-thunk';

import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import nock from 'nock';

import * as courseActions from './courseActions';
import * as types from './actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {

    // nock('http://example.com')
    //   .get('/course')
    //   .reply(200, {body: {course: [{id: 1, firstName: 'Cory', lastName: 'House'}]}});
    const expectedActions = [
      {
        type: types.BEGIN_AJAX_CALL
      }, {
        type: types.LOAD_COURSES_SUCCESS,
        body: {
          courses: [
            {
              id: 'clean-code',
              title: 'Clean Code'
            }
          ]
        }
      }
    ];

    const store = mockStore({
      courses: []
    }, expectedActions);
    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });

  });
});
