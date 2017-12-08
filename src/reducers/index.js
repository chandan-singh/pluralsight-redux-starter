import {combineReducers} from 'redux';

import ajaxCallsInProgress from './ajaxStatusReducer';
import authors from './authorReducer';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
