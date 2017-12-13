import React from 'react';

const SaveButton = ({handleSubmit, getUrl}) => {

  return(
    <div>
      <button onClick={handleSubmit, getUrl}>Save</button>
    </div>
  );
};

export default SaveButton;
