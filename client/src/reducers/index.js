import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import activeSelection from './reducer_activeSelection';

const rootReducer = combineReducers({
  user,
  flash,
  activeSelection,
});

export default rootReducer;
