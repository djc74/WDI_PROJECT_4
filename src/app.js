import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './scss/style.scss';

import Routes from './components/utilities/Routes';
import Nav from './components/utilities/Nav';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
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
