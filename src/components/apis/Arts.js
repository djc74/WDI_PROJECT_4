import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

const upliftStyle = {
  display: 'block',
  width: '600px',
  margin: '0 auto',
  borderRadius: '5px'
};

const buttonStyle = {
  marginTop: '10px',
  color: 'white',
  fontWeight: '600'
}

const commentStyle = {
  margin: '0 auto',
  textAlign: 'center'
}

class Arts extends React.Component {
  state = {
    arts: [],
    currentIndex: 1
  }

  componentDidMount() {
    Axios
    .get('https://www.reddit.com/r/art/.json')
    .then(res => this.setState({ arts: res.data.data.children }))
    .catch(err => console.log(err));
  }

  nextInArray = () => {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex + 1 }));
  }

  handleClick = (currentArt) => {
    const body = currentArt.data.url
    this.props.getBody(body, 'art');
  }

  render () {
    const currentArt = this.state.arts[this.state.currentIndex];

    return (
      <div>
      <div className="row">
      { currentArt &&
        <div>
          <img style={upliftStyle} src={currentArt.data.url} />
          <h4 style={commentStyle}>{currentArt.data.title}</h4>
        </div>}
      </div>

        <div className="row" style={upliftStyle}>
        <button onClick={this.nextInArray} style={buttonStyle}>Next Picture</button>
        {Auth.isAuthenticated() && <button onClick={() => this.handleClick(currentArt)} style={buttonStyle} className="u-pull-right">Save</button>}
        </div>
        </div>
      );
    }
  }

  export default Arts;
