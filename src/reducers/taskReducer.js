import _ from 'lodash';

import {
  CREATE_TASK,
  FETCH_TASKS,
  FETCH_TASK,
  EDIT_TASK,
  DELETE_TASK,
  FETCH_ORG_TASKS
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return { ...action.payload };
    case FETCH_TASK:
      return { ...action.payload };
    case CREATE_TASK:
      return { ...state };
    case EDIT_TASK:
      return { ...action.payload };
    case DELETE_TASK:
      return { ...state };
    case FETCH_ORG_TASKS:
      return { ...action.payload.tasks };
    default:
      return state;
  }
};
