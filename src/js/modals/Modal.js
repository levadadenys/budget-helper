import React from 'react';

class Modal extends React.Component {
  static defaultProps = {
    id: '',
    modalTitle: '',
    modalSize: '',
    onClick: () => null
  };

  render () {
    return (
      <div className="modal fade" id={this.props.id} tabIndex={-1} role="dialog"
           aria-labelledby={`${this.props.id}-label`}>
        <div className={`modal-dialog ${this.props.modalSize}`} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal"
                      aria-label="Close"><span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title"
                  id={`${this.props.id}-label`}>{this.props.modalTitle}</h4>
            </div>
            <div className="modal-body ">
              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  {
                    this.props.children
                  }
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <div className='row'>
                <div className='col-md-2 col-md-offset-10'>
                  <button type='button' className='btn btn-primary' data-dismiss="modal"
                          onClick={this.props.onClick}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;