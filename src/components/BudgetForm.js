import React, { Component } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';
import * as budgetActions from '../redux/budget/budgetActions';

const labelStyles = `
  margin-bottom: 16px;  
`;

class BudgetForm extends Component {
  state = {
    budget: 0,
  };

  static propTypes = {
    saveBudget: T.func.isRequired,
  };

  handleChange = e => {
    this.setState({
      budget: Number(e.target.value),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveBudget(this.state.budget);
    this.setState({ budget: 0 });
  };

  render() {
    const { budget } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input type="number" value={budget} onChange={this.handleChange} />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveBudget: value => dispatch(budgetActions.save(value)),
  };
};

export default connect(null, mapDispatchToProps)(BudgetForm);
