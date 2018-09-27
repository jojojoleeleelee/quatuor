import { combineReducers } from 'redux';
import quartetReducer from './quartetReducer';

const rootReducer = combineReducers({
  quartetReducer: quartetReducer
})

export default rootReducer;
