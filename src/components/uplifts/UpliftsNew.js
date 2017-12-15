import React from 'react';
import Axios from 'axios';

import UpliftsForm from './UpliftsForm';

class UpliftsNew extends React.Component {
  state = {
    uplift: {
      body: '',
      category: ''
    }
  }

  handleChange = ({ target: {name, value} }) => {
    const uplift = Object.assign({}, this.state.uplift, {[name]: value});
    this.setState({ uplift });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/uplifts', this.state.uplift)
      .then(() => this.props.history.push('/users/:id'))
      .catch(err => console.log(err.response.data.errors));
  }

  render() {
    return(
      <div>
        <h1>Add your own uplift!</h1>
        <UpliftsForm
          handleSubmit={ this.handleSubmit }
          handleChange={ this.handleChange }
          uplift={ this.state.uplift }
        />
      </div>
    );
  }
}

export default UpliftsNew;
