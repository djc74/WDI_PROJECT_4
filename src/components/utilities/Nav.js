import React                from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';

const Nav = ({ history }) => {

  const currentUserId = Auth.getPayload().userId;

  function logout(e) {
    e.preventDefault();
    Auth.removeToken();
    history.push('/');
  }

  return(
    <nav>
      <button>
        <Link to="/">Home</Link>
      </button>
      {!Auth.isAuthenticated() &&
        <button>
          <Link to="/register">Register</Link>
        </button>}
      {!Auth.isAuthenticated() &&
        <button>
          <Link to="/login">Login</Link>
        </button>}
      {Auth.isAuthenticated() &&
        <button href="#" onClick={logout}>
          Logout
        </button>}
      {Auth.isAuthenticated() &&
        <button>
          <Link to={`/users/${currentUserId}`}>My uplifts</Link>
        </button>}
    </nav>
  );
};

export default withRouter(Nav);
