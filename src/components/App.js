import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';
import BudgetForm from './BudgetForm';
import ExpenseForm from './ExpenseForm';
import ExpensesTableContainer from './ExpenceTableContainer';
import ValuesContainer from './ValuesContainer';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = ({ expenses }) => (
  <Container>
    <BudgetForm />
    <ValuesContainer />
    <ExpenseForm />
    {expenses.length > 0 && <ExpensesTableContainer />}
  </Container>
);

App.propTypes = {
  expenses: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      name: T.string.isRequired,
      amount: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default App;
