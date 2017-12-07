import React from 'react';
import Axios from 'axios';

class UserUpliftsShow extends React.Component {
  state = {
    useruplifts: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/uplifts/${this.props.match.params.id}`)
      .then(res => this.setState({ useruplifts: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>User Uplift show</h1>
        <img src={this.state.useruplifts.body}/>
        <h3>{this.state.useruplifts.category}</h3>
      </div>
    );
  }
}

export default UserUpliftsShow;