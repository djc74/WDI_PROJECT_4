import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
// import Auth from '../../lib/Auth';

import Gifs from '../apis/Gifs';

class UpliftsIndex extends React.Component {
  state = {
    uplifts: []
  }

  componentDidMount() {
    Axios
      .get('api/uplifts')
      .then(res => this.setState({ uplifts: res.data}))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <h1>Uplift Index</h1>
        <Gifs />
        {this.state.uplifts.map(uplift =>
          <div key={uplift.id}>
            <Link to={`/uplifts/${uplift.id}`}>
              <img src={uplift.body} />
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default UpliftsIndex;
