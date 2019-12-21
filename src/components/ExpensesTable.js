import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';
import Button from './shared/Button';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ expenses, removeExpense }) => (
  <div>
    {expenses && (
      <Table>
        <thead>
          <tr>
            <th>Expense name</th>
            <th>Expense amount</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ id, name, amount }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{amount}</td>
              <td>
                <Button label="Delete" onClick={() => removeExpense(id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
  </div>
);

ExpensesTable.propTypes = {
  expenses: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      name: T.string.isRequired,
      amount: T.number.isRequired,
    }).isRequired,
  ).isRequired,
  removeExpense: T.func.isRequired,
};

export default ExpensesTable;
