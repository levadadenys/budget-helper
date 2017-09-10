import React from 'react';

export default class ContainerFluid extends React.Component {
  render () {
    return (
      <div className={`container-fluid ${this.props.className ||
      ''}`}>{this.props.children}</div>
    );
  }
}
