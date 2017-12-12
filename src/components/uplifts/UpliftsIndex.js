import React from 'react';

import Gifs from '../apis/Gifs';
import Pictures from '../apis/Pictures';
import Jokes from '../apis/Jokes';

class UpliftsIndex extends React.Component {

  render() {
    return (
      <div>
        <h1>Uplift Index</h1>
        <Gifs />
        <Pictures />
        <Jokes />
      </div>
    );
  }
}

export default UpliftsIndex;
