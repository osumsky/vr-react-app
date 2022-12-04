import ACTIONS_TYPES from './actionTypes';

export const increment = () => {
  return { type: ACTIONS_TYPES.INCREMENT };
};

export const decrement = () => {
  return { type: ACTIONS_TYPES.DECREMENT };
};

export const setStep = (step) => {
  return { type: ACTIONS_TYPES.SET_STEP, newStep: step };
};
