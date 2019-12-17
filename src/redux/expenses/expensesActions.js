import shortid from 'shortid';
import * as types from './expensesTypes';

export const add = ({ name, amount }) => {
  return {
    type: types.ADD_EXPENSE,
    payload: {
      expense: {
        id: shortid.generate(),
        name,
        amount: Number(amount),
      },
    },
  };
};

export const remove = id => {
  return {
    type: types.REMOVE_EXPENSE,
    payload: { id },
  };
};
