import * as types from './expensesTypes';

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_EXPENSE:
      return [...state, action.payload.expense];
    case types.REMOVE_EXPENSE:
      return state.filter(note => note.id !== action.payload.id);
    default:
      return state;
  }
};

export default expensesReducer;
