import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Greeting extends Component {
  render() {
    const hh = this.props.time / 60;
    switch (true) {
      case (hh >= 8 && hh <= 10):
        return <div className="greeting"> Good morning! </div>;
      case (hh >= 12 && hh <= 14):
        return <div className="greeting"> Bon appetite! </div>;
      case (hh >= 17 && hh <= 20):
        return <div className="greeting"> Bye bye! </div>;
      default:
        return null;
    }
  }
}

Greeting.propTypes = {
  time: PropTypes.number.isRequired,
};
