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
      .get('https://www.reddit.com/r/EarthPorn/.json')
      .then(res => this.setState({ picture: res.data.data.children[0] }))
      .catch(err => console.log(err));
  }

  render () {
    return (
      <div>
        <h1>Pictures</h1>
        { this.state.picture && <img src={this.state.picture.data.url} />}
      </div>
    );
  }
}

export default Pictures;
