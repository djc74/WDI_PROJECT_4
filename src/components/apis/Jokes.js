// https://www.reddit.com/r/Jokes/.json


import React from 'react';
import Axios from 'axios';


class Jokes extends React.Component {
  state = {}

  componentDidMount() {
    Axios
      .get('https://www.reddit.com/r/Jokes/.json')
      .then(res => this.setState({ joke: res.data.data.children[1] }))
      .catch(err => console.log(err));
  }

  render () {
    return (
      <div>
        <h1>Jokes</h1>
        { this.state.joke &&
          <div>
            <h3>{this.state.joke.data.title}</h3>
            <h3>{this.state.joke.data.selftext}</h3>
          </div>
        }
      </div>
    );
  }
}

export default Jokes;
