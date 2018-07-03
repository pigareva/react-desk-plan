import React from 'react';
import PropTypes from 'prop-types';
import Greeting from './Greeting';
import getTime from '../functions/getTime';

const Clock = ({ time, isGreetingNeeded }) => (
  <div>
    <div className="clock">{getTime(time)}</div>
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
