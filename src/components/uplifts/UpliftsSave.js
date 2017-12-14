import React from 'react';

import Gifs from '../apis/Gifs';
import Pictures from '../apis/Pictures';
import Jokes from '../apis/Jokes';

class UpliftsSave extends React.Component {

  render() {
    return (
      <div>
        <h1>Save an uplift</h1>
        <Gifs />
        <Pictures />
        <Jokes />
      </div>
    );
  }
}

export default UpliftsSave;
