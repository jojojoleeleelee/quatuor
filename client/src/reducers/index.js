import { combineReducers } from 'redux';
import quartets from './quartets';

const rootReducer = combineReducers({
  quartets: quartets
})

export default rootReducer;
