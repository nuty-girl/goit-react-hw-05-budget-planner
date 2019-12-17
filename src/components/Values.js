import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';
import Value from './Value';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, totalExpenses, balance }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={totalExpenses} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

Values.propTypes = {
  budget: T.oneOfType([T.number, T.string]).isRequired,
  totalExpenses: T.number.isRequired,
  balance: T.number.isRequired,
};

export default Values;
