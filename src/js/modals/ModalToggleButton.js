import React from 'react';

class ModalToggleButton extends React.Component {
  static defaultProps = {
    id: '',
    onClick: () => null
  };

  render () {
    return (
      <button type="button" className="btn btn-primary"
              data-toggle="modal"
              data-target={`#${this.props.id}`}
              onClick={this.props.onClick}>{this.props.children}
      </button>
    );
  }
}

export default ModalToggleButton;