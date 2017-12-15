import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';
import BackButton from '../utilities/BackButton';

import Slider from 'react-slick';


const upliftStyle = {
  border: '1px solid white',
  height: '400px',
  overflow: 'hidden',
  margin: '0 auto',
  borderRadius: '5px'
};

class UsersShow extends React.Component {
  state = {
    user: {},
    uplifts: []
  }

  componentDidMount() {
    Axios
    .get(`/api/users/${this.props.match.params.id}`, {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
    })
    .then(res => this.setState({ user: res.data.user, uplifts: res.data.uplifts}))
    .catch(err => console.log(err));
  }

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1
    };


    return (
      <div>
        <h1><strong>{this.state.user.firstname}&apos;s</strong> reasons to be   cheerful</h1>
        <Slider {...settings}>
        { this.state.uplifts.map(uplift =>
          <div key={uplift.id}>
            <Link to={`/uplifts/${uplift.id}`}>
            <img style={upliftStyle} src={uplift.body} />}
            </Link>
          </div>
        )}
        </Slider>
      </div>
      );
    }
  }

export default UsersShow;
