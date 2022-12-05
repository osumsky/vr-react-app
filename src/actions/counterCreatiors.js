import ACTIONS_TYPES from './actionTypes';

export const increment = () => ({
  type: ACTIONS_TYPES.INCREMENT,
});

export const decrement = () => ({
  type: ACTIONS_TYPES.DECREMENT,
});

export const setStep = (step) => ({
  type: ACTIONS_TYPES.SET_STEP,
  newStep: step,
});
