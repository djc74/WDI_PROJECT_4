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

class Quotes extends React.Component {
  state = {
    quotes: [],
    currentIndex: 2
  }

  componentDidMount() {
    Axios
    .get('https://www.reddit.com/r/QuotesPorn/.json')
    .then(res => this.setState({ quotes: res.data.data.children }))
    .catch(err => console.log(err));
  }

  nextInArray = () => {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex + 1 }));
  }

  handleClick = (currentQuote) => {
    const body = currentQuote.data.url
    this.props.getBody(body, 'quote');
  }

  render () {
    const currentQuote = this.state.quotes[this.state.currentIndex];

    return (
      <div>
      <div className="row">
      { currentQuote &&
        <img style={upliftStyle} src={currentQuote.data.url} />}
        </div>
        <div className="row" style={upliftStyle}>
        <button onClick={this.nextInArray} style={buttonStyle}>Next Quote</button>
        {Auth.isAuthenticated() && <button onClick={() => this.handleClick(currentQuote)} style={buttonStyle} className="u-pull-right">Save</button>}
        </div>
        </div>
      );
    }
  }

  export default Quotes;
