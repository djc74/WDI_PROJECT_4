import React from 'react';
import Axios from 'axios';

const upliftStyle = {
  width: '600px'
}

class Pictures extends React.Component {
  state = {
    pictures: [],
    currentIndex: 1
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
        <div className="row">
        <button onClick={this.nextInArray}>Next</button>
        <button onClick={() => this.handleClick(currentPicture)}>Save</button>
        </div>
        </div>
      );
    }
  }

  export default Pictures;
