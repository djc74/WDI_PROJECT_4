import React from 'react';
import Axios from 'axios';


class Pictures extends React.Component {
  state = {
    pictures: [],
    currentIndex: 0
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

  render () {
    const currentPicture = this.state.pictures[this.state.currentIndex];

    return (
      <div>
        <h1>Pictures</h1>
        { currentPicture && <img src={currentPicture.data.url} />}
        <button onClick={this.nextInArray}>Next</button>
      </div>
    );
  }
}

export default Pictures;
