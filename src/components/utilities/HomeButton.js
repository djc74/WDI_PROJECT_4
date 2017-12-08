import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  return(
    <div>
      <button>
        <Link to="/">
          Take me to the homepage
        </Link>
      </button>
    </div>
  );
};

export default HomeButton;
