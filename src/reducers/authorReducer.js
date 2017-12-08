import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      //debugger
      return action.authors;
      // return [...state,
      //   Object.assign({}, action.author)
      // ];

    default:
      //debugger
      return state;
  }
}
