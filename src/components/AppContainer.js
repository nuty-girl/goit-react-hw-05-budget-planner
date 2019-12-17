import { connect } from 'react-redux';
import * as expensesSelectors from '../redux/expenses/expensesSelectors';
import App from './App';

const mapStateToProps = state => {
  return {
    expenses: expensesSelectors.getExpenses(state),
  };
};

export default connect(mapStateToProps)(App);
