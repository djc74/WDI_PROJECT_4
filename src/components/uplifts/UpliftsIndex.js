import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';

import Quotes from '../apis/Quotes';
import Gifs from '../apis/Gifs';
import Pictures from '../apis/Pictures';
import Jokes from '../apis/Jokes';
import Oddlys from '../apis/Oddlys';
import MostBeautifuls from '../apis/MostBeautifuls';
import Arts from '../apis/Arts';
import TrendGifs from '../apis/TrendGifs';

const upliftStyle = {
  display: 'block',
  width: '600px',
  margin: '0 auto'
};

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
      .post('/api/uplifts', this.state.uplift, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.props.history.push(`/users/${res.data.createdBy.id}`))
      .catch(err => console.log(err.response.data.errors));
  }

  render() {
    return (
      <div>
      <Quotes getBody={this.getBody} />
      <hr />
      <Gifs getBody={this.getBody} />
      <hr />
      <Pictures getBody={this.getBody} />
      <hr />
      <Jokes getBody={this.getBody} />
      <hr />
      <MostBeautifuls getBody={this.getBody} />
      <hr />
      <TrendGifs getBody={this.getBody} />
      <hr />
      <Arts getBody={this.getBody} />
      <hr />
      <Oddlys getBody={this.getBody} />
    </div>
    );
  }
}

export default UpliftsIndex;
