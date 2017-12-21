import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import BackButton from '../utilities/BackButton';


const show = {
  width: '80%',
  display: 'block',
  margin: '0 auto',
  borderRadius: '5px',
  border: '1px solid white'
}

const button = {
  display: 'block',
  margin: '10px auto',
  color: 'white',
  fontWeight: '800'
}

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

  deleteUplift = () => {
    Axios
    .delete(`/api/uplifts/${this.props.match.params.id}`)
    .then(() => this.props.history.push(`/users/${Auth.getPayload().userId}`))
    .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
      <div className="row">
      <img style={show} className="animated lightSpeedIn" src={this.state.uplift.body}/>
      </div>
      <div className="row">
      <button onClick={this.deleteUplift} style={button}>Remove this uplift</button>
      <BackButton />
      </div>
      </div>
    );
  }
}

export default UpliftsShow;
