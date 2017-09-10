import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from './../actions/appActions';
import ContainerFluid from '../components/bootstrapComponents/ContainerFluid';
import IncomeAndExpensesChart from '../components/charts/IncomeAndExpensesChart';
import Sidebar from '../components/Sidebar';

const INCOME_COLORS = [
  '#4286f4',
  '#40c977',
  '#9de256',
  '#24BC91',
  '#67afbc',
  '#26bc72',
  '#65bc49',
  '#36bc09'];

const EXPENSES_COLORS = [
  '#f44346',
  '#c9782e',
  '#e28e13',
  '#bc354d',
  '#bc261b',
  '#bc4a15',
  '#bc5b61',
  '#bc7451'
];

class ChartsPage extends React.Component {
  render () {
    return (
      <ContainerFluid className='charts-page'>
        <Sidebar locationTitle='Charts' />
        <IncomeAndExpensesChart
          title='Income'
          titleClassName='income-chart-title'
          colors={INCOME_COLORS}
          items={this.props.incomeAndExpensesStore.income}
          categories={this.props.categoriesStore}
        />
        <IncomeAndExpensesChart
          title='Expenses'
          titleClassName='expenses-chart-title'
          colors={EXPENSES_COLORS}
          items={this.props.incomeAndExpensesStore.expenses}
          categories={this.props.categoriesStore}
        />
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
)(ChartsPage);