import React from 'react';

const SaveButton = ({handleSubmit, handleChange}) => {

  return(
    <div>
      <button onClick={handleSubmit, handleChange}>Save</button>
    </div>
  );
};

export default SaveButton;
