import React from 'react';
// import Axios from 'axios';

import UserUpliftsForm from './UserUpliftsForm';

class UserUpliftsNew extends React.Component {
  state = {
    useruplift: {
      body: '',
      category: ''
    }
  }



  render() {
    return(
      <div>
        <h1>User Uplifts New</h1>
        <UserUpliftsForm />
      </div>
    );
  }
}

export default UserUpliftsNew;
