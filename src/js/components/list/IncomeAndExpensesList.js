import React from 'react';
import ListGroup from '../bootstrapComponents/ListGroup';
import IncomeAndExpensesListItem from './IncomeAndExpensesListItem';

class IncomeAndExpensesList extends React.Component {
  static defaultProps = {
    items: [],
    categories: [],
    title: '',
    className: '',
    size: 'col-md-4',

    onSave: () => null,
    onDelete: () => null
  };

  render () {
    return (
      <ListGroup title={this.props.title} size={this.props.size}
                 titleClassName={this.props.className}>
        {this.props.items.map(
          item => <IncomeAndExpensesListItem key={item.id} {...item}
                                             category={this.props.categories.find(
                                               category => category.id ===
                                                 item.category)}
                                             categories={this.props.categories}
                                             onSave={this.props.onSave}
                                             onDelete={this.props.onDelete}
          />)}
      </ListGroup>
    );
  }

}

export default IncomeAndExpensesList;