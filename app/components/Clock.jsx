import React from 'react';
import PropTypes from 'prop-types';
import Greeting from './Greeting';

const Clock = ({ time, isGreetingNeeded }) => (
  <div>
    <div className="clock">{String(Math.floor(time / 60)).padStart(2, '0')}:{String(time % 60).padStart(2, '0')}</div>
    {isGreetingNeeded && <Greeting time={time || 0} />}
  </div>);

export default Clock;

Clock.propTypes = {
  time: PropTypes.number,
  isGreetingNeeded: PropTypes.bool,
};

Clock.defaultProps = {
  time: 0,
  isGreetingNeeded: false,
};
