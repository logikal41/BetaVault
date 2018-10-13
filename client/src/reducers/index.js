import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import activeSelection from './reducer_activeSelection';
import activeList from './reducer_activeList';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user,
  flash,
  activeSelection,
  activeList,
  form: formReducer,
});

export default rootReducer;
