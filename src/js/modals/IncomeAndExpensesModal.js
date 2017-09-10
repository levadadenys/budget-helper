import React from 'react';
import Modal from './Modal';
import IncomeAndExpensesForm from '../components/forms/IncomeAndExpensesForm';

class IncomeAndExpensesModal extends React.Component {
  static defaultProps = {
    id: '',
    title: '',
    categories: [],
    onSave: () => null
  };

  constructor (props) {
    super(props);

    this.state = this.getInitialState();
    this.createExpense = this.createExpense.bind(this);
  }

  getInitialState () {
    return {sum: 1, data: '', description: '', category: ''};
  }

  createExpense () {
    this.props.onSave({...this.state});
    this.setState(this.getInitialState());
  }

  render () {
    return (
      <Modal id={this.props.id} modalTitle={this.props.title}
             onClick={this.createExpense}>
        <IncomeAndExpensesForm isEditing={true} {...this.state}
                               categories={this.props.categories}
                               onUpdate={(value, field) => this.setState(
                                 {[field]: value})} />
      </Modal>
    );
  }
}

export default IncomeAndExpensesModal;