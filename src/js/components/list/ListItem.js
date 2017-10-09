import React from 'react';

import ListGroupItem from '../bootstrapComponents/ListGroupItem';
import Row from '../bootstrapComponents/Row';

class ListItem extends React.Component {
  static defaultProps = {
    isEditing: false,
    onEdit: () => null,
    onCancel: () => null,
    onSave: () => null,
    onDelete: () => null
  };

  onSave () {
    this.props.onSave();
    this.props.onEdit();
  }

  render () {
    return (
      <ListGroupItem>
        <Row>
          <div className="col-md-11 col-xs-10">
            <div className="pull-left">

              {this.props.children}

            </div>
          </div>
          <div className="col-md-1 col-xs-2">
            {
              this.props.isEditing ? <div>
                <Row>
                  <button onClick={this.props.onCancel}
                          type="button"
                          className="btn btn-default">
                    <i className="fa fa-times" aria-hidden="true" />
                  </button>
                </Row>

                <br />

                <Row>
                  <button onClick={this.onSave.bind(this)}
                          type="button"
                          className="btn btn-default">
                    <i className="fa fa-floppy-o" aria-hidden="true" />
                  </button>
                </Row>
              </div> : <Row>
                <button onClick={this.props.onEdit}
                        type="button"
                        className="btn btn-default">
                  <i className="fa fa-gear" aria-hidden={true} />
                </button>
              </Row>
            }

            <br />

            <Row>
              <button onClick={this.props.onDelete} type="button"
                      className="btn btn-default">
                <i className="fa fa-trash" aria-hidden={true} />
              </button>
            </Row>
          </div>
        </Row>
      </ListGroupItem>
    );
  }
}

export default ListItem;