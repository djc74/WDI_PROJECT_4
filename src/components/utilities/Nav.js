import React                from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';

const button = {
  float: 'right',
  margin: '0 5px',
  fontWeight: '800'
};

const white = {
  color: 'white'
};

const tinyLogo = {
  height: '50px',
  padding: '5px'
};


const Nav = ({ history }) => {

  function logout(e) {
    e.preventDefault();
    Auth.removeToken();
    history.push('/');
  }

  return(
    <nav>
      <Link to="/"><img style={tinyLogo} src="../../assets/download.png" /></Link>
      <div style={button}>
        {!Auth.isAuthenticated() &&
          <button>
            <Link style={white} to="/register">Register</Link>
          </button>}
      </div>
      <div style={button}>
        {!Auth.isAuthenticated() &&
            <button>
              <Link style={white} to="/login">Login</Link>
            </button>}
      </div>
      <div style={button}>
        {Auth.isAuthenticated() &&
              <button style={white} href="#" onClick={logout}>
                Logout
              </button>}
      </div>
      <div style={button}>
        {Auth.isAuthenticated() &&
                <button>
                  <Link style={white} to={`/users/${Auth.getPayload().userId}`}>My uplifts</Link>
                </button>}
      </div>
      <div style={button}>
        {Auth.isAuthenticated() &&
                <button>
                  <Link style={white} to="/uplifts/new">Add uplift</Link>
                </button>}
      </div>
    </nav>
  );
};

export default withRouter(Nav);
