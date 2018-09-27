import { combineReducers } from 'redux';
import quartetReducer from './quartetReducer';

export default combineReducers({
  quartet: quartetReducer
})
