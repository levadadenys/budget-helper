import React from 'react';
import moment from 'moment';
import DropdownMenu from '../bootstrapComponents/DropdownMenu';
import DatePicker from 'react-datepicker';

class IncomeAndExpensesForm extends React.Component {
  static defaultProps = {
    isEditing: false,
    sum: 1,
    date: moment(),
    description: '',
    category: {name: 'Select category', id: 0},
    categories: [],
    onUpdate: () => null
  };

  render () {
    return this.props.isEditing
      ? this.renderEditableForm()
      : this.renderStaticForm();
  }

  renderEditableForm () {
    return (
      <div className="form-group">
        <label>Sum:&nbsp;</label>
        <input type="number" value={this.props.sum} placeholder={1}
               onChange={e => this.props.onUpdate(e.target.value, 'sum')}
               className="form-control" />
        <label>Date:&nbsp;</label>
        <DatePicker selected={moment(this.props.date)}
                    dateFormat='DD/MM/YYYY'
                    className='form-control'
                    onChange={date => this.props.onUpdate(date, 'date')} />


        <label>Description:&nbsp;</label>
        <input type="text" value={this.props.description}
               placeholder={'Your description here'}
               onChange={e => this.props.onUpdate(e.target.value,
                 'description')}
               className="form-control" />

        <label>Category:&nbsp;</label>
        <DropdownMenu items={this.props.categories}
                      title={this.props.category.name || 'Select category'}
                      titleGetter={item => item.name}
                      onClick={(value) => this.props.onUpdate(value,
                        'category')}
        />

      </div>
    );
  }

  renderStaticForm () {
    return (
      <div>
        <h4><strong>Sum:&nbsp;</strong>{this.props.sum}</h4>
        <h4><strong>Date:&nbsp;</strong>{moment(this.props.date)
          .format('DD/MM/YYYY')}</h4>
        <h4><strong>Description:&nbsp;</strong>{this.props.description}</h4>
        <h4><strong>Category:&nbsp;</strong>{this.props.category.name}</h4>
      </div>
    );
  }
}

export default IncomeAndExpensesForm;