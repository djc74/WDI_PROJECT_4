import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

const upliftStyle = {
  display: 'block',
  width: '600px',
  margin: '0 auto'
};

const buttonStyle = {
  marginRight: '10px',
  color: 'white',
  fontWeight: '600'
};

class Jokes extends React.Component {
  state = {
    jokes: [],
    currentIndex: 1
  }

  componentDidMount() {
    Axios
      .get('https://www.reddit.com/r/Jokes/.json')
      .then(res => this.setState({ jokes: res.data.data.children }))
      .catch(err => console.log(err));
  }

  nextInArray = () => {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex + 1 }));
  }

  handleClick = (currentJoke) => {
    const body = currentJoke.data.selftext;
    this.props.getBody(body, 'joke');
  }

  render () {
    const currentJoke = this.state.jokes[this.state.currentIndex];


    return (
      <div>
        { currentJoke &&
          <div style={upliftStyle}>
            <h3><strong>{currentJoke.data.title}</strong></h3>
            <h3>{currentJoke.data.selftext}</h3>
            <button onClick={this.nextInArray} style={buttonStyle}>Next joke</button>
            {Auth.isAuthenticated() && <button onClick={() => this.handleClick(currentJoke)} style={buttonStyle} className="u-pull-right">Save</button>}
          </div>
        }
      </div>
    );
  }
}

export default Jokes;
