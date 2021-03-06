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

class Pictures extends React.Component {
  state = {
    pictures: [],
    currentIndex: 2
  }

  componentDidMount() {
    Axios
    .get('https://www.reddit.com/r/EarthPorn/.json')
    .then(res => this.setState({ pictures: res.data.data.children }))
    .catch(err => console.log(err));
  }

  nextInArray = () => {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex + 1 }));
  }

  handleClick = (currentPicture) => {
    const body = currentPicture.data.url
    this.props.getBody(body, 'picture');
  }

  render () {
    const currentPicture = this.state.pictures[this.state.currentIndex];

    return (
      <div>
      <div className="row">
      { currentPicture &&
        <img style={upliftStyle} src={currentPicture.data.url} />}
        </div>
        <div className="row" style={upliftStyle}>
        <button onClick={this.nextInArray} style={buttonStyle}>Next Picture</button>
        {Auth.isAuthenticated() && <button onClick={() => this.handleClick(currentPicture)} style={buttonStyle} className="u-pull-right">Save</button>}
        </div>
        </div>
      );
    }
  }

  export default Pictures;
