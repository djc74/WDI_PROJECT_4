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

class MostBeautifuls extends React.Component {
  state = {
    mosts: [],
    currentIndex: 2
  }

  componentDidMount() {
    Axios
    .get('https://www.reddit.com/r/MostBeautiful/.json')
    .then(res => this.setState({ mosts: res.data.data.children }))
    .catch(err => console.log(err));
  }

  nextInArray = () => {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex + 1 }));
  }

  handleClick = (currentMost) => {
    const body = currentMost.data.url
    this.props.getBody(body, 'most');
  }

  render () {
    const currentMost = this.state.mosts[this.state.currentIndex];

    return (
      <div>
      <div className="row">
      { currentMost &&
        <div>
        <img style={upliftStyle} src={currentMost.data.url} />
      <h4 style={commentStyle}>{currentMost.data.title}</h4>
    </div>}
        </div>

        <div className="row" style={upliftStyle}>
        <button onClick={this.nextInArray} style={buttonStyle}>Next Picture</button>
        {Auth.isAuthenticated() && <button onClick={() => this.handleClick(currentMost)} style={buttonStyle} className="u-pull-right">Save</button>}
        </div>
        </div>
      );
    }
  }

  export default MostBeautifuls;
