import React from 'react';
import Axios from 'axios';

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

class Gifs extends React.Component {
  state = {
    gifs: [],
    currentIndex: 0,
  }

  componentDidMount() {
    Axios
      .get('https://api.giphy.com/v1/gifs/trending?api_key=AkP2KvyB6EO8UDAOutOdjF2l1j3yplBA&limit=50&rating=G')
      .then(res => this.setState({ gifs: res.data.data }))
      .catch(err => console.log(err));
  }

  nextInArray = () => {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex + 1 }));
  }

  handleClick = (currentGif) => {
    const body = currentGif.images.original.url
    this.props.getBody(body, 'gif');
  }

  render () {
    const currentGif = this.state.gifs[this.state.currentIndex];

    return (
      <div>
        <div className="row">
        { currentGif &&
          <img style={upliftStyle} src={currentGif.images.original.url} />}
        </div>
        <div className="row" style={upliftStyle}>
        <button onClick={this.nextInArray} style={buttonStyle}>Next gif</button>
        <button onClick={() => this.handleClick(currentGif)} style={buttonStyle} className="u-pull-right">Save</button>
        </div>
      </div>
    );
  }
}

export default Gifs;
