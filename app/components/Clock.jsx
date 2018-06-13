import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Greeting from './Greeting';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: props.time, isOff: false };
  }

  componentDidMount() {
    this.startTime();
  }

  componentWillUnmount() {
    this.stopTime();
  }

  tick() {
    const currentTime = this.state.time;
    if (!this.state.isOff) {
      this.setState({ time: currentTime >= 1440 ? 540 : currentTime + 1 });
    }
  }

  stopTime() {
    clearInterval(this.timerID);
  }

  startTime() {
    this.timerID = setInterval(
      () => this.tick(),
      100,
    );
  }

  render() {
    return (
      <div>
        <div className="clock">{String(Math.floor(this.state.time / 60)).padStart(2, '0')}:{String(this.state.time % 60).padStart(2, '0')}</div>
        {this.props.isGreetingNeeded && <Greeting time={this.state.time} />}
      </div>
    );
  }
}

Clock.propTypes = {
  time: PropTypes.number.isRequired,
  isGreetingNeeded: PropTypes.bool,
};

Clock.defaultProps = {
  isGreetingNeeded: false,
};
