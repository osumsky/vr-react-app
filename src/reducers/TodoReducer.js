import ACTIONS_TYPES from '../actions/actionTypes';
import { v4 as uuidv4 } from 'uuid';

const initValues = {
  tasks: [
    { id: uuidv4(), body: 'test0', isDone: false },
    { id: uuidv4(), body: 'test1', isDone: false },
  ],
};

const todoReducer = (state = initValues, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.CREATE_TASK: {
      const { values } = action;
      const { tasks } = state;
      return {
        ...state,
        tasks: [...tasks, { id: uuidv4(), ...values }],
      };
    }

    case ACTIONS_TYPES.UPDATE_TASK: {
      const { id, values } = action;
      const { tasks } = state;
      const newTasks = tasks.map((task) =>
        task.id === id ? { ...task, ...values } : { ...task }
      );
      return { ...state, tasks: newTasks };
    }

    case ACTIONS_TYPES.DELETE_TASK: {
      const { id } = action;
      const { tasks } = state;
      const newTasks = tasks.filter((task) => task.id !== id);
      return { ...state, tasks: newTasks };
    }

    default:
      return state;
  }
};
export default todoReducer;
