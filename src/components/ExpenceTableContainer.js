import { connect } from 'react-redux';
import * as expensesSelectors from '../redux/expenses/expensesSelectors';
import * as expensesActions from '../redux/expenses/expensesActions';
import ExpensesTable from './ExpensesTable';

const mapStateToProps = state => {
  return {
    expenses: expensesSelectors.getExpenses(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeExpense: id => dispatch(expensesActions.remove(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
