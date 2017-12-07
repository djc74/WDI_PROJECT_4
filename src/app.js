import React from 'react';
import ReactDOM from 'react-dom';


import UpliftsIndex from './components/UpliftsIndex';


class App extends React.Component {
  render() {
    return (
      <main>
        <UpliftsIndex />
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
