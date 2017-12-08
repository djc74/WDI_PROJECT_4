// Flickr
//
// Key:
// 184738fe509090d1e87dda46d875c263
//
// Secret:
// 5006b875fc7cfd90


import React from 'react';
import Axios from 'axios';


class Pictures extends React.Component {
  state = {}

  componentDidMount() {
    Axios
      .get('https://www.reddit.com/r/pics.json')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render () {
    return (
      <div>
        <h1>Pictures</h1>
    
      </div>
    );
  }
}

export default Pictures;
