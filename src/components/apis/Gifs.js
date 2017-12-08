// Giphy
//
// Api Key:
// AkP2KvyB6EO8UDAOutOdjF2l1j3yplBA

import React from 'react';
import Axios from 'axios';


class Gifs extends React.Component {
  state = {}

  componentDidMount() {
    Axios
      .get('https://api.giphy.com/v1/gifs/trending?api_key=AkP2KvyB6EO8UDAOutOdjF2l1j3yplBA&limit=1&rating=G')
      .then(res => this.setState({ gif: res.data.data[0] }))
      .catch(err => console.log(err));
  }

  render () {
    return (
      <div>
        <h1>Gifs</h1>
        { this.state.gif && <img src={this.state.gif.images.fixed_width.url} />}
      </div>
    );
  }
}

export default Gifs;
