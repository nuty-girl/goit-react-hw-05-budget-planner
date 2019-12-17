import * as types from './budgetTypes';

// eslint-disable-next-line import/prefer-default-export
export const save = value => {
  return {
    type: types.SAVE_BUDGET,
    payload: { budget: value },
  };
};
