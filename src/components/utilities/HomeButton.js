import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  return(
    <div>
      <button>
        <Link to="/">
          Homepage
        </Link>
      </button>
    </div>
  );
};

export default HomeButton;
