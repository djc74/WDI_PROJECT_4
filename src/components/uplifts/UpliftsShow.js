import React from 'react';
import Axios from 'axios';

const show = {
  width: '80%',
  display: 'block',
  margin: '0 auto',
  border: '1px solid black'
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
    .then(() => this.props.history.push(`/users/${this.props.match.params.id}`))
    .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
      <div className="row">
      <img style={show} src={this.state.uplift.body}/>
      </div>
      <div className="row">
      <button onClick={this.deleteUplift} style={button}>Remove this uplift</button>
      </div>
      </div>
    );
  }
}

export default UpliftsShow;
