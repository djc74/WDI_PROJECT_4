import React from 'react';
import Axios from 'axios';

const show = {
  width: '600px',
  margin: '0 auto'
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
      <div className="row">
        <img style={show} src={this.state.uplift.body}/>
        <button onClick={this.deleteUplift}>Delete</button>
      </div>
    );
  }
}

export default UpliftsShow;
