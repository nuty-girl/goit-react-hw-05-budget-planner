export const getExpenses = state => state.expenses;

export const calculateTotalExpenses = state => {
  const expenses = getExpenses(state);
  return expenses.reduce((total, expense) => total + Number(expense.amount), 0);
};
