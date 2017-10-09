import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from './../actions/appActions';
import ContainerFluid from './../components/bootstrapComponents/ContainerFluid';
import Sidebar from './../components/Sidebar';
import ModalToggleButton from './../modals/ModalToggleButton';
import IncomeAndExpensesModal from './../modals/IncomeAndExpensesModal';
import IncomeAndExpensesList from './../components/list/IncomeAndExpensesList';

class IncomeAndExpensePage extends React.Component {
  render () {
    const INCOME_MODAL_ID = 'income-modal';
    const EXPENSE_MODAL_ID = 'expense-modal';

    return (
      <ContainerFluid className='income-and-expenses-page'>
        <Sidebar locationTitle='Income & expenses'>
          <div>
            <ModalToggleButton id={INCOME_MODAL_ID}>
              Add new income
            </ModalToggleButton>
          </div>

          <br />

          <div>
            <ModalToggleButton id={EXPENSE_MODAL_ID}>
              Add new expense
            </ModalToggleButton>

          </div>
        </Sidebar>

        <IncomeAndExpensesList title='Income'
                               className='income-list'
                               size='col-md-4 col-md-offset-2 col-xs-12'
                               items={this.props.incomeAndExpensesStore.income}
                               categories={this.props.categoriesStore}
                               onSave={this.props.actions.editIncome}
                               onDelete={this.props.actions.deleteIncome} />

        <IncomeAndExpensesList title='Expenses'
                               className='expenses-list'
                               items={this.props.incomeAndExpensesStore.expenses}
                               categories={this.props.categoriesStore}
                               onSave={this.props.actions.editExpense}
                               onDelete={this.props.actions.deleteExpense} />

        <IncomeAndExpensesModal id={INCOME_MODAL_ID} title='New income'
                                categories={this.props.categoriesStore}
                                onSave={this.props.actions.addIncome} />
        <IncomeAndExpensesModal id={EXPENSE_MODAL_ID} title='New expense'
                                categories={this.props.categoriesStore}
                                onSave={this.props.actions.addExpense} />
      </ContainerFluid>
    );
  }
}

export default connect(
  state => ({
    incomeAndExpensesStore: state.incomeAndExpensesStore,
    categoriesStore: state.categoriesStore
  }),
  dispatch => ({actions: bindActionCreators(appActions, dispatch)})
)(IncomeAndExpensePage);