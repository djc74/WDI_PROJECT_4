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

  render() {
    return (
      <div className="row">
        <img style={show} src={this.state.uplift.body}/>
      </div>
    );
  }
}

export default UpliftsShow;
