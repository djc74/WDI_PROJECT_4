import React from 'react';
import Axios from 'axios';

class UpliftsShow extends React.Component {
  state = {
    uplift: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/uplifts/${this.props.match.params.id}`)
      .then(res => this.setState({ uplift: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Uplift show</h1>
        <img src={this.state.uplift.body}/>
        <h3>{this.state.uplift.category}</h3>
      </div>
    );
  }
}

export default UpliftsShow;
