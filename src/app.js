import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './scss/style.scss';

import Routes from './components/utilities/Routes';


class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Routes />
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
