import React from 'react';

import BackButton from '../utilities/BackButton';

const UserUpliftsForm = ({ handleSubmit, handleChange, useruplift }) => {
  return (
    <div className="row">
      <div className="page-banner col-md-12">
        <BackButton />
      </div>
      <form onSubmit={handleSubmit} className="col-md-6">

        <div className="form-group">
          <label htmlFor="image">Picture or gif</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={useruplift.body}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="height">Height</label>
          <input
            type="text"
            className="form-control"
            id="height"
            name="height"
            value={useruplift.category}
            onChange={handleChange}
          />
        </div>

        <div>
          <button className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
};

export default UserUpliftsForm;
