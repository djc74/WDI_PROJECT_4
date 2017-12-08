// Giphy
//
// Api Key:
// AkP2KvyB6EO8UDAOutOdjF2l1j3yplBA

import React from 'react';
import Axios from 'axios';


class Gifs extends React.Component {
  state = {
    gif: ''
  }

  componentDidMount() {
    Axios
      .get('https://api.giphy.com/v1/gifs/trending?api_key=AkP2KvyB6EO8UDAOutOdjF2l1j3yplBA&limit=25&rating=G')
      .then(res => this.setState({ gif: res.data.data }))
      .catch(err => console.log(err));
  }


  render () {
    return (
      <img src={this.state.gif.embed_url} />
    );
  }
}

export default Gifs;
