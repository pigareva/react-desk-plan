import { CURRENT_TIME, END_DAY, START_WORKING_DAY_TIME } from '../consts';

const time = (state = {}, action) => {
  switch (action.type) {
    case CURRENT_TIME:
    {
      return Object.assign({}, state, { time: action.time });
    }
    case END_DAY:
    {
      return Object.assign({}, state, { day: action.day, time: START_WORKING_DAY_TIME });
    }
    default:
      return state;
  }
};

export default time;
