import React from 'react';

import BackButton from '../utilities/BackButton';

const UserUpliftsForm = ({ handleSubmit, handleChange, uplift }) => {
  return (
    <div className="row">
      <div className="page-banner col-md-12">
        <BackButton />
      </div>
      <form onSubmit={handleSubmit} className="col-md-6">

        <div className="form-group">
          <label htmlFor="body">Picture or gif</label>
          <input
            type="text"
            className="form-control"
            id="body"
            name="body"
            value={uplift.body}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={uplift.category}
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
