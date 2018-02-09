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
};

class TrendGifs extends React.Component {
  state = {
    trendgifs: [],
    currentIndex: 0
  }

  componentDidMount() {
    Axios
      .get('http://api.giphy.com/v1/gifs/trending?api_key=AkP2KvyB6EO8UDAOutOdjF2l1j3yplBA&limit=5')
      .then(res => this.setState({ trendgifs: res.data.data }))
      .catch(err => console.log(err));
  }

  nextInArray = () => {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex + 1 }));
  }

  handleClick = (currentTrendGif) => {
    const body = currentTrendGif.images.original.url;
    this.props.getBody(body, 'gif');
  }

  render () {
    const currentTrendGif = this.state.trendgifs[this.state.currentIndex];

    return (
      <div>
        <div className="row">
          { currentTrendGif &&
            <img style={upliftStyle} src={currentTrendGif.images.original.url} />}
        </div>
        <div className="row" style={upliftStyle}>
          <button onClick={this.nextInArray} style={buttonStyle}>Next gif</button>
          {Auth.isAuthenticated() && <button onClick={() => this.handleClick(currentTrendGif)} style={buttonStyle} className="u-pull-right">Save</button>}
        </div>
      </div>
    );
  }
}

export default TrendGifs;
