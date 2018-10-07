import { combineReducers } from 'redux';
import quartets from './quartets';
import quartetForm from './quartetForm'

const rootReducer = combineReducers({
  quartets: quartets,
  quartetForm: quartetForm
})

export default rootReducer;
