import { currentTime, endDay } from '../actions';
import store from '../store';
import { END_WORKING_DAY_TIME, START_WORKING_DAY_TIME, TIME_INTERVAL } from '../consts';

const getCurrentTime = (time) => {
  let res = time.time || START_WORKING_DAY_TIME;

  const tick = () => {
    if (!store.getState().button.buttonStart) {
      res = res >= END_WORKING_DAY_TIME ? END_WORKING_DAY_TIME : res + 1;

      store.dispatch(currentTime(res));

      if (res === END_WORKING_DAY_TIME) {
        store.dispatch(endDay);
        // eslint-disable-next-line no-use-before-define
        stopTimer();
      }
    }
  };

  const currentTimerID = setInterval(() => {
    tick();
  }, TIME_INTERVAL);

  const stopTimer = () => {
    clearInterval(currentTimerID);
  };
};

export default getCurrentTime;
