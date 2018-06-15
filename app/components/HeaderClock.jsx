import React from 'react';
import PropTypes from 'prop-types';
import Greeting from './Greeting';

const HeaderClock = ({ time }) => {
  return (
    <div>
      <div className="clock">{String(Math.floor(time / 60)).padStart(2, '0')}:{String(time % 60).padStart(2, '0')}</div>
      <Greeting time={time || 0} />
    </div>);
};

export default HeaderClock;

HeaderClock.propTypes = {
  time: PropTypes.number,
};

HeaderClock.defaultProps = {
  time: 0,
};
