import React from 'react';
import Axios from 'axios';

import BackButton from '../utilities/BackButton';

class UserUpliftsShow extends React.Component {
  state = {
    uplifts: {}
  }

  deleteUplift = () => {
    Axios
      .delete(`/api/uplifts/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/useruplifts'))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    Axios
      .get(`/api/uplifts/${this.props.match.params.id}`)
      .then(res => this.setState({ uplifts: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>User Uplift show</h1>
        <BackButton />
        <img src={this.state.uplifts.body}/>
        <h3>{this.state.uplifts.category}</h3>
        <button onClick={this.deleteUplift}>Delete</button>
      </div>
    );
  }
}

export default UserUpliftsShow;
