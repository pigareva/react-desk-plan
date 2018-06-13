import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Greeting from './Greeting';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: null };
  }

  componentDidMount() {
    this.startTime();
  }

  componentWillUnmount() {
    this.stopTime();
  }

  tick() {
    const currentTime = this.state.time || this.props.startTime;
    if (!this.props.isOff) {
      this.setState({
        time: currentTime >= this.props.endTime ? this.props.endTime : currentTime + 1,
      });
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
  startTime: PropTypes.number,
  endTime: PropTypes.number,
  isOff: PropTypes.bool,
  isGreetingNeeded: PropTypes.bool,
};

Clock.defaultProps = {
  isGreetingNeeded: false,
  isOff: false,
  startTime: 0,
  endTime: 99999999999,
};
