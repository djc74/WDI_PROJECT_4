import React from 'react';

import BackButton from '../utilities/BackButton';

const UpliftsForm = ({ handleSubmit, handleChange, uplift }) => {
  return (
    <div>
      <BackButton />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="body">Link to picture or gif</label>
          <input
            type="text"
            className="form-control"
            id="body"
            name="body"
            value={uplift.body}
            onChange={handleChange}
          />
        </div>
        <div>
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
          <button>Save</button>
        </div>
      </form>
    </div>
  );
};

export default UpliftsForm;
