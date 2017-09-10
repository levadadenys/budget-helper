import React from 'react';
import ListGroup from '../bootstrapComponents/ListGroup';
import CategoriesListItem from './CategoriesListItem';

class CategoriesList extends React.Component {
  static defaultProps = {
    categories: [],
    onSave: () => null,
    onDelete: () => null
  };

  render () {
    return (
      <ListGroup title='Categories' size='col-md-4 col-lg-offset-4'>
        {
          this.props.categories.map(category =>
            <CategoriesListItem key={category.id} onSave={this.props.onSave}
                                onDelete={this.props.onDelete} {...category} />
          )
        }
      </ListGroup>
    );
  }
}

export default CategoriesList;
