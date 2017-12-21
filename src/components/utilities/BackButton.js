import React from 'react';
import { withRouter } from 'react-router-dom';

const button = {
  display: 'block',
  margin: '10px auto',
  color: 'white',
  fontWeight: '800'
}

const BackButton = ({ history }) => {
  return(
    <div>
      <button onClick={ history.goBack } style={ button }>
        Back
      </button>
    </div>
  );
};

export default withRouter(BackButton);
