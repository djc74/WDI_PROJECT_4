import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';

import BackButton from '../utilities/BackButton';

class UsersShow extends React.Component {
  state = {
    user: {},
    uplifts: []
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ user: res.data.user, uplifts: res.data.uplifts}))
      .catch(err => console.log(err));
  }

  deleteUplift = () => {
    Axios
      .delete(`/api/uplifts/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/useruplifts'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>User Uplift show</h1>

        { this.state.user && <h1>{ this.state.user.firstname }</h1>}
        { this.state.uplifts && <h2> { this.state.uplifts.length }</h2>}
      </div>
    );
  }
}

export default UsersShow;
