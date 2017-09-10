import React from 'react';

class DropdownMenu extends React.Component {
  static defaultProps = {
    title: '',
    items: [],
    titleGetter: () => null,
    onClick: () => null,
    extraData: null

  };

  onClick (item_id, extraData) {
    this.props.onClick(item_id, extraData);
  }

  render () {
    return (
      <div className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button"
                data-toggle="dropdown"
                aria-haspopup={true} aria-expanded={true}>
          {this.props.title}&nbsp;<span className="caret" />
        </button>
        <ul className="dropdown-menu"
            style={{
              maxHeight: '40vh',
              overflowY: 'scroll'
            }}>
          {
            this.props.items.map(item =>
              <li
                key={`menu-item-${item.id}`}><a
                onClick={this.onClick.bind(this, item,
                  this.props.extraData)}>{this.props.titleGetter(item)}</a>
              </li>)
          }

        </ul>
      </div>
    );
  }
}

export default DropdownMenu;
