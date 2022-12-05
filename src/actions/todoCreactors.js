import ACTIONS_TYPES from './actionTypes';

export const createTask = (values) => ({ type: ACTIONS_TYPES.CREATE_TASK, values });

export const updateTask = (id, values) => ({ type: ACTIONS_TYPES.UPDATE_TASK, id, values });

export const deleteTask = (id) => ({ type: ACTIONS_TYPES.DELETE_TASK, id });
