import React from 'react';
import Modal from './Modal';

import CategoryForm from '../components/forms/CategoryForm';

class CategoryModal extends React.Component {
  static defaultProps = {
    id: '',
    onSave: () => null
  };

  constructor (props) {
    super(props);

    this.state = this.getInitialState();
    this.createCategory = this.createCategory.bind(this);
  }

  getInitialState () {
    return {name: ''};
  }

  createCategory () {
    this.props.onSave({name: this.state.name});
    this.setState(this.getInitialState());
  }

  render () {
    return (
      <Modal id={this.props.id} modalTitle='New category'
             onClick={this.createCategory}>
        <CategoryForm isEditing={true} name={this.state.name}
                      onChange={e => this.setState({name: e.target.value})} />
      </Modal>
    );
  }
}

export default CategoryModal;