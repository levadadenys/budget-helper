import React from 'react';
import ListItem from './ListItem';

import CategoryForm from '../forms/CategoryForm';

class CategoriesListItem extends React.Component {
  static defaultProps = {
    name: '',
    id: '',
    onSave: () => null,
    onDelete: () => null
  };

  constructor (props) {
    super(props);

    this.state = {name: props.name, isEditing: false};
  }

  onCancel () {
    this.setState({isEditing: false, name: this.props.name});
  }

  render () {
    return (
      <ListItem
        isEditing={this.state.isEditing}
        onEdit={() => this.setState({isEditing: !this.state.isEditing})}
        onCancel={this.onCancel.bind(this)}
        onSave={this.props.onSave.bind(this,
          {id: this.props.id, name: this.state.name})}
        onDelete={this.props.onDelete.bind(this, {id: this.props.id})}>

        <CategoryForm {...this.state}
                      onChange={e => this.setState(
                        {name: e.target.value})} />


      </ListItem>
    );
  }
}

export default CategoriesListItem;