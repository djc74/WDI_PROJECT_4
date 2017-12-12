import React from 'react';
import Axios from 'axios';

import SaveButton from '../utilities/SaveButton';


class Gifs extends React.Component {
  state = {
    gifs: [],
    currentIndex: 0,
    url: ''
  }

  componentDidMount() {
    Axios
      .get('https://api.giphy.com/v1/gifs/trending?api_key=AkP2KvyB6EO8UDAOutOdjF2l1j3yplBA&limit=25&rating=G')
      .then(res => this.setState({ gifs: res.data.data }))
      .catch(err => console.log(err));
  }

  nextInArray = () => {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex + 1 }));
  }


  handleChange = ({ target: {name, value} }) => {
    const uplift = Object.assign({}, this.state.uplift, {[name]: value});
    this.setState({ uplift });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/uplifts', this.state.uplift)
      .then(() => this.props.history.push('/useruplifts'))
      .catch(err => console.log(err.response.data.errors));
  }

  render () {
    const currentGif = this.state.gifs[this.state.currentIndex];


    return (
      <div>
        <h1>Gifs</h1>
        { currentGif && <img src={currentGif.images.fixed_width.url} />}
        <button onClick={this.nextInArray}>Next</button>
        <SaveButton
          handleSubmit={ this.handleSubmit }
          handleChange={ this.handleChange }
          uplift={ this.uplift }
        />
      </div>
    );
  }
}

export default Gifs;
