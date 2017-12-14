import React from 'react';
import Axios from 'axios';

import Gifs from '../apis/Gifs';
import Pictures from '../apis/Pictures';
import Jokes from '../apis/Jokes';

class UpliftsIndex extends React.Component {
  state = {
    uplift: {
      body: '',
      category: ''
    }
  }

  getBody = (body, category) => {
    const uplift = Object.assign({}, this.state.uplift, { body: body, category: category});

    this.setState({ uplift }, () => this.submitUplift());
  }

  submitUplift = () => {
    Axios
      .post('/api/uplifts', this.state.uplift)
      .then(() => this.props.history.push('/users/:id'))
      .catch(err => console.log(err.response.data.errors));
  }

  render() {
    return (
      <div>
      <h1>Uplift Index</h1>
      <Gifs getBody={this.getBody}/>
      <Pictures getBody={this.getBody}/>
      <Jokes getBody={this.getBody}/>
      </div>
    );
  }
}

export default UpliftsIndex;
