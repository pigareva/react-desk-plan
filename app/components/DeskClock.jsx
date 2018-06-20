import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TIME_INTERVAL } from '../consts';
import Clock from './Clock';

export default class DeskClock extends Component {
  constructor(props) {
    super(props);
    this.startTime = this.startTime.bind(this);
    this.state = { time: null, timeToShow: 0 };
  }

  componentDidMount() {
    this.startTime();
  }

  componentWillUnmount() {
    this.stopTime();
  }

  tick() {
    const currentTime = this.state.time || this.props.startTime;
    const { timeToShow } = this.state;
    if (!this.props.isOff) {
      this.setState({
        time: currentTime >= this.props.endTime ? this.props.endTime : currentTime + 1,
        timeToShow: currentTime < this.props.delay ? 0 : timeToShow + 1,
      });
    }
    if (this.state.time === Number(this.props.delay) && this.props.startTimeCallback) {
      this.props.startTimeCallback();
    }
    if (this.state.timeToShow === this.props.endTime && this.props.endTimeCallback) {
      this.props.endTimeCallback();
    }
  }

  stopTime() {
    clearInterval(this.timerID);
  }

  startTime() {
    this.timerID = setInterval(
      () => this.tick(),
      TIME_INTERVAL,
    );
  }

  render() {
    return <Clock time={this.state.timeToShow} />;
  }
}

DeskClock.propTypes = {
  startTime: PropTypes.number,
  endTime: PropTypes.number,
  isOff: PropTypes.bool,
  endTimeCallback: PropTypes.func,
  startTimeCallback: PropTypes.func,
  delay: PropTypes.string,
};

DeskClock.defaultProps = {
  isOff: false,
  startTime: 0,
  endTime: 99999999999,
  endTimeCallback: null,
  startTimeCallback: null,
  delay: 1,
};
