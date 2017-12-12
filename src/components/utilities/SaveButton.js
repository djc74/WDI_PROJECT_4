import React from 'react';

const SaveButton = ({handleSubmit, url}) => {

  return(
    <div>
      <button onClick={handleSubmit, url}>Save</button>
    </div>
  );
};

export default SaveButton;
