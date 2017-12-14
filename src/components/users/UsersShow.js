import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';
import BackButton from '../utilities/BackButton';

const upliftStyle = {
  border: '1px solid white',
  width: '90%',
  height: '300px',
  overflow: 'hidden',
  margin: '10px'
};

class UsersShow extends React.Component {
  state = {
    user: {},
    uplifts: []
  }

  componentDidMount() {
    Axios
    .get(`/api/users/${this.props.match.params.id}`, {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
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
        <div className="four columns">
        <Link to={`/uplifts/${uplift.id}`}>
        <img style={upliftStyle} className="shadow" src={uplift.body} />
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
