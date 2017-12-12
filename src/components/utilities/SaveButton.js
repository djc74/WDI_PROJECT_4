import React from 'react';
import Axios from 'axios';

class SaveButton extends React.Component {
  state = {}

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/uplifts', this.state.uplift)
      .then(() => this.props.history.push('/useruplifts'))
      .catch(err => console.log(err.response.data.errors));
  }

  render() {
    return(
      <div>
        <button onClick={this.handleSubmit}>Save</button>
      </div>
    );
  }
}

export default SaveButton;
