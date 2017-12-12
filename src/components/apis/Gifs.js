// Giphy
//
// Api Key:
// AkP2KvyB6EO8UDAOutOdjF2l1j3yplBA

import React from 'react';
import Axios from 'axios';
// import { Link } from 'react-router-dom';

import SaveButton from '../utilities/SaveButton';

var i = 0;
function nextInArray() {
  i++;
  console.log('clicked', i);
}


class Gifs extends React.Component {
  state = {}

  componentDidMount() {
    Axios
      .get('https://api.giphy.com/v1/gifs/trending?api_key=AkP2KvyB6EO8UDAOutOdjF2l1j3yplBA&limit=1&rating=G')
      .then(res => this.setState({ gif: res.data.data[i] }))
      .catch(err => console.log(err));
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
    return (
      <div>
        <h1>Gifs</h1>
        { this.state.gif && <img src={this.state.gif.images.fixed_width.url} />}
        <button onClick={nextInArray}>Next</button>
        <SaveButton
          handleSubmit={ this.handleSubmit }
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Gifs;
