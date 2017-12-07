import React from 'react';
import Axios from 'axios';
// import { Link } from 'react-router-dom';
// import Auth from '../../lib/Auth';

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
        {this.state.uplifts.map(uplift =>
          <div key={uplift.id}>
            <img src={uplift.body} />
          </div>
        )}
      </div>
    );
  }
}

export default UpliftsIndex;
