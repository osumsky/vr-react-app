import ACTIONS_TYPES from '../actions/actionTypes';

const initValues = {
  count: 5,
  step: 1,
};

const counterReducer = (state = initValues, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.INCREMENT:
      return { ...state, count: state.count + state.step };

    case ACTIONS_TYPES.DECREMENT:
      return { ...state, count: state.count - state.step };

    case ACTIONS_TYPES.SET_STEP:
      return { ...state, step: action.newStep };

    default:
      return state;
  }
};
export default counterReducer;
