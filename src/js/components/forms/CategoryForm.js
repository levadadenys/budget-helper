import React from 'react';

class CategoryForm extends React.Component {
  static defaultProps = {
    isEditing: false,
    name: '',
    onChange: () => null
  };

  render () {
    return (
      this.props.isEditing ? <div className="form-group">
        <label>Category name:&nbsp;</label>
        <input type="text" value={this.props.name} placeholder={'Category'}
               onChange={this.props.onChange}
               className="form-control" />
      </div> : <div>
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}

export default CategoryForm;