import * as expensesSelectors from '../expenses/expensesSelectors';

const getBudget = state => state.budget;

const calculateBalance = state =>
  Number(getBudget(state)) -
  Number(expensesSelectors.calculateTotalExpenses(state));

export default { getBudget, calculateBalance };
