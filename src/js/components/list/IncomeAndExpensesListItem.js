import React from 'react';
import ListItem from './ListItem';
import IncomeAndExpensesForm from '../forms/IncomeAndExpensesForm';

class IncomeAndExpensesListItem extends React.Component {
  static defaultProps = {
    id: '',
    sum: 1,
    description: '',
    category: {name: '', id: 0},

    categories: [],
    onSave: () => null,
    onDelete: () => null
  };

  constructor (props) {
    super(props);

    this.state = {
      sum: props.sum,
      date: props.date,
      description: props.description,
      category: props.category,
      isEditing: false
    };
  }

  onCancel () {
    this.setState({
      isEditing: false,
      sum: this.props.sum,
      date: this.props.date,
      description: this.props.description,
      category: this.props.category
    });
  }

  render () {
    return (
      <ListItem isEditing={this.state.isEditing}
                onEdit={() => this.setState({isEditing: !this.state.isEditing})}
                onCancel={this.onCancel.bind(this)}
                onSave={this.props.onSave.bind(this, {
                  id: this.props.id,
                  sum: this.state.sum,
                  date: this.state.date,
                  description: this.state.description,
                  category: this.state.category
                })}
                onDelete={this.props.onDelete.bind(this, {id: this.props.id})}
      >

        <IncomeAndExpensesForm {...this.state}
                               onUpdate={(value, field) => this.setState(
                                 {[field]: value})}
                               categories={this.props.categories}
        />
      </ListItem>
    );
  }
}

export default IncomeAndExpensesListItem;