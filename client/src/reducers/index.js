import { combineReducers } from 'redux';
import repertoireReducer from './repertoireReducer';

export default combineReducers({
  repertoire: repertoireReducer
})
