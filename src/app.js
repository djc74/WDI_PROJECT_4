import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './scss/style.scss';

import Auth from './lib/Auth';
import Routes from './components/utilities/Routes';


function logout(e) {
  e.preventDefault();
  Auth.removeToken();
  history.push('/');
}


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <button> <Link to="/register">Register</Link></button>
            <button> <Link to="/login">Login</Link></button>
            <button href="#" onClick={logout}>Logout</button>
          </nav>
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
