import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import taskReducer from './taskReducer';

export default combineReducers({
  tasks: taskReducer,
  form: formReducer
});
