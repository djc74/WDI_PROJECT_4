import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

const upliftStyle = {
  display: 'block',
  width: '600px',
  margin: '0 auto',
  borderRadius: '5px'
};

const buttonStyle = {
  marginTop: '10px',
  color: 'white',
  fontWeight: '600'
}

const commentStyle = {
  margin: '0 auto',
  textAlign: 'center'
}

class Oddlys extends React.Component {
  state = {
    oddlys: [],
    currentIndex: 1
  }

  componentDidMount() {
    Axios
    .get('https://www.reddit.com/r/BeAmazed/.json')
    .then(res => this.setState({ oddlys: res.data.data.children }))
    .catch(err => console.log(err));
  }

  nextInArray = () => {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex + 1 }));
  }

  handleClick = (currentOddly) => {
    const body = currentOddly.data.url
    this.props.getBody(body, 'oddly');
  }

  render () {
    const currentOddly = this.state.oddlys[this.state.currentIndex];

    return (
      <div>
      <div className="row">
      { currentOddly &&
        <div>
        <img style={upliftStyle} src={currentOddly.data.url} />
      <h4 style={commentStyle}>{currentOddly.data.title}</h4>
    </div>}
        </div>

        <div className="row" style={upliftStyle}>
        <button onClick={this.nextInArray} style={buttonStyle}>Next Picture</button>
        {Auth.isAuthenticated() && <button onClick={() => this.handleClick(currentOddly)} style={buttonStyle} className="u-pull-right">Save</button>}
        </div>
        </div>
      );
    }
  }

  export default Oddlys;
