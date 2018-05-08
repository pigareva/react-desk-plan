import React, { Component } from 'react';

export default class Greeting extends Component {
  render() {
    const hh = this.state.time / 60;
    switch (true) {
      case (hh >= 8 && hh <= 10):
        return <h2> Good Morning! </h2>;
      case (hh >= 12 && hh <= 14):
        return <h2> Bon appetite! </h2>;
      case (hh >= 17 && hh <= 20):
        return <h2> Bye bye! </h2>;
      default:
        return null;
    }
  }
}
