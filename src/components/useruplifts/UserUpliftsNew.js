import React from 'react';
import Axios from 'axios';

import UserUpliftsForm from './UserUpliftsForm';

class UserUpliftsNew extends React.Component {
  state = {
    useruplift: {
      body: '',
      category: ''
    }
  }

  handleChange = ({ target: {name, value} }) => {
    const useruplift = Object.assign({}, this.state.useruplift, {[name]: value});
    this.setState({ useruplift });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/useruplifts', this.state.useruplift)
      .then(() => this.props.history.push('/useruplifts'))
      .catch(err => console.log(err.response.data.errors));
  }

  render() {
    return(
      <div>
        <h1>User Uplifts New</h1>
        <UserUpliftsForm
          handleSubmit={ this.handleSubmit }
          handleChange={ this.handleChange }
          useruplift={ this.state.useruplift }
        />
      </div>
    );
  }
}

export default UserUpliftsNew;
