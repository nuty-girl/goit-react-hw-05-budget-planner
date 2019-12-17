import * as types from './budgetTypes';

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case types.SAVE_BUDGET:
      return action.payload.budget;
    default:
      return state;
  }
};

export default budgetReducer;
