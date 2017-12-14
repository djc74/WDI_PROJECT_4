import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';
import BackButton from '../utilities/BackButton';

const upliftStyle = {
  border: '2px solid black',
  width: '400px',
  height: '400px',
  overflow: 'hidden',
  display: 'block',
  margin: '10px auto'
};

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

    render() {
    return (
      <div>
      { this.state.user &&
        <h1><strong>{this.state.user.firstname}s</strong> reasons to be cheerful</h1>}
      <div className="row">
      { this.state.uplifts.map(uplift =>
        <div key={uplift.id}>
        <div className="six columns">
        <Link to={`/uplifts/${uplift.id}`}>
        <img style={upliftStyle} src={uplift.body} />
        </Link>
        </div>
        </div>
      )}
      </div>
      </div>
    );
  }
}

export default UsersShow;
