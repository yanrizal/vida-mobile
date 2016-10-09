import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { UPDATE_LOCATION } from 'react-router-redux';
import account from './account';

const rootReducer = combineReducers({
  account
});

export default rootReducer;
