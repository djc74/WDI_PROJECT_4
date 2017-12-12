import React from 'react';
import Axios from 'axios';


class Quotes extends React.Component {
  state = {}

  componentDidMount() {
    Axios
      .get('https://gist.github.com/signed0/d70780518341e1396e11#file-quotes-json')
      .then(res => this.setState({ quote: res.data }))
      .catch(err => console.log(err));
  }

  render () {
    return (
      <div>
        <h1>Quotes</h1>
        { this.state.picture && <img src={this.state.picture.data.url} />}
      </div>
    );
  }
}

export default Quotes;
