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
  '#30fec4',
  '#5ea0ac',
  '#37b55e',
  '#335d0c',
  '#45f10c'];

const EXPENSES_COLORS = [
  '#ff4649',
  '#c2732b',
  '#f99c15',
  '#a72f44',
  '#bc261b',
  '#a44112',
  '#fd7a83',
  '#f5936d'
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