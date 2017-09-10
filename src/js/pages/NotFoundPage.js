import React from 'react';
import ContainerFluid from './../components/bootstrapComponents/ContainerFluid';

class NotFoundPage extends React.Component {
  render () {
    return (
      <ContainerFluid className='not-found-page'>
        <h1 className="col-md-6 col-md-offset-3">404. Not found!</h1>
      </ContainerFluid>
    );
  }
}

export default NotFoundPage;