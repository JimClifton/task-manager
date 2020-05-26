import history from '../history';
import tasks from '../apis/tasks';
import {
  CREATE_TASK,
  FETCH_TASKS,
  FETCH_TASK,
  EDIT_TASK,
  DELETE_TASK,
  FETCH_ORG_TASKS
} from './types';

export const fetchTasks = () => {
  return async (dispatch) => {
    const response = await tasks.get('/tasks');
    dispatch({ type: FETCH_TASKS, payload: response.data });
  }
}

export const createTask = (formValues) => {
  return async (dispatch) => {
    const response = await tasks.post('/tasks', formValues);
    history.push('/');
    dispatch({ type: CREATE_TASK, payload: response.data })
  }
}

export const fetchTask = (id) => {
  return async (dispatch) => {
    const response = await tasks.get(`/tasks/${id}`);
    dispatch({ type: FETCH_TASK, payload: response.data });
  }
}

export const editTask = (id, formValues) => {
  return async (dispatch) => {
    const response = await tasks.patch(`/tasks/${id}`, formValues);
    history.push('/');
    dispatch({ type: EDIT_TASK, payload: response.data });
  }
}

export const deleteTask = (id) => {
  return async (dispatch) => {
    await tasks.delete(`/tasks/${id}`);
    history.push('/');
    dispatch({ type: DELETE_TASK, payload: id });
  }
}

export const fetchOrgTasks = (id) => {
  return async (dispatch) => {
    const response = await tasks.get(`/tasks/organisations/${id}`);
    dispatch({ type: FETCH_ORG_TASKS, payload: response.data });
  }
}