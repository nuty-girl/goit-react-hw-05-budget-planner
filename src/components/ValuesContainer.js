import { connect } from 'react-redux';
import budgetSelectors from '../redux/budget/budgetSelectors';
import * as expensesSelectors from '../redux/expenses/expensesSelectors';
import Values from './Values';

const mapStateToProps = state => {
  return {
    budget: budgetSelectors.getBudget(state),
    totalExpenses: expensesSelectors.calculateTotalExpenses(state),
    balance: budgetSelectors.calculateBalance(state),
  };
};

export default connect(mapStateToProps)(Values);
