import React from 'react';

export default class ListGroup extends React.Component {
  static defaultProps = {
    size: 'col-md-6 col-lg-offset-3',
    titleClassName: ''
  };

  render () {
    return (
      <div className={this.props.size}>
        {this.props.title ? <h4 className={this.props.titleClassName}>
          <strong>{this.props.title}</strong></h4> : null}
        <ul
          className={`list-group ${this.props.className ||
          ''}`}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}
