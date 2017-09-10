import React from 'react';

class Panel extends React.Component {
  static defaultProps = {
    title: '',
    type: 'default',
    className: ''
  };

  render () {
    return (
      <div className={`panel panel-${this.props.type} ${this.props.className}`}>
        <div className="panel-heading">
          <div className="panel-title">
            {this.props.title}
          </div>
        </div>
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Panel;