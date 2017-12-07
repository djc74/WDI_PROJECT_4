import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
// import Auth from '../../lib/Auth';

class UserUpliftsIndex extends React.Component {
  state = {
    useruplifts: []
  }

  componentDidMount() {
    Axios
      .get('api/useruplifts')
      .then(res => this.setState({ useruplifts: res.data}))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <h1>User Uplift Index</h1>
        <button>
          <Link to={'/useruplifts/new'}>Add Uplift</Link>
        </button>
        {this.state.useruplifts.map(useruplift =>
          <div key={useruplift.id}>
            <Link to={`/useruplifts/${useruplift.id}`}>
              <img src={useruplift.body} />
            </Link>

          </div>
        )}
      </div>
    );
  }
}

export default UserUpliftsIndex;
