import React                from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';

const rightStyle = {
  float: 'right',
  margin: '0 5px',
};

const tinyLogo = {
  height: '50px',
  padding: '5px'
}

const Nav = ({ history }) => {

  // const currentUserId = Auth.getPayload().userId;

  function logout(e) {
    e.preventDefault();
    Auth.removeToken();
    history.push('/');
  }

  return(
    <nav>
    <Link to="/"><img style={tinyLogo} src="../../assets/download.png" /></Link>
    <div style={rightStyle}>
    {!Auth.isAuthenticated() &&
      <button>
      <Link to="/register">Register</Link>
      </button>}
      </div>
      <div style={rightStyle}>
      {!Auth.isAuthenticated() &&
        <button>
        <Link to="/login">Login</Link>
        </button>}
        </div>
        <div style={rightStyle}>
        {Auth.isAuthenticated() &&
          <button href="#" onClick={logout}>
          Logout
          </button>}
          </div>
          <div style={rightStyle}>
          {Auth.isAuthenticated() &&
            <button>
            <Link to={`/users/${Auth.getPayload().userId}`}>My uplifts</Link>
            </button>}
            </div>
            </nav>
          );
        };

        export default withRouter(Nav);
