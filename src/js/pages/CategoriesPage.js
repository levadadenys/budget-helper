import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from './../actions/appActions';

import ContainerFluid from '../components/bootstrapComponents/ContainerFluid';
import CategoriesList from '../components/list/CategoriesList';
import CategoryModal from '../modals/CategoryModal';
import Sidebar from '../components/Sidebar';
import ModalToggleButton from '../modals/ModalToggleButton';

class CategoriesPage extends React.Component {
  render () {
    const CATEGORY_MODAL_ID = 'category-modal';

    return (
      <ContainerFluid className='categories-page'>
        <Sidebar locationTitle='Categories'>
          <ModalToggleButton id={CATEGORY_MODAL_ID}>
            Create new category
          </ModalToggleButton>

        </Sidebar>

        <CategoriesList categories={this.props.categoriesStore}
                        onSave={this.props.actions.editCategory}
                        onDelete={this.props.actions.deleteCategory} />

        <CategoryModal id={CATEGORY_MODAL_ID}
                       onSave={this.props.actions.addCategory} />

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
)(CategoriesPage);