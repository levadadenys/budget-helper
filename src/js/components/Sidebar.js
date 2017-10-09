import React from 'react';

import Panel from './bootstrapComponents/Panel';

class Sidebar extends React.Component {
  static defaultProps = {
    history: null,
    match: null,
    locationTitle: ''
  };

  render () {
    return (
      <Panel className={window.screen.width > 768 ? 'affix' : ''}
             title={<h1>Budget</h1>}>
        <h4>{this.props.locationTitle}</h4>

        <br />

        {this.props.children}
      </Panel>
    );
  }
}

export default Sidebar;