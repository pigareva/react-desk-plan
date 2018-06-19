import { CURRENT_TIME, NEW_DAY } from '../consts';

const time = (state = {}, action) => {
  switch (action.type) {
    case CURRENT_TIME:
    {
      return Object.assign({}, state, { time: action.time });
    }
    case NEW_DAY:
    {
      return Object.assign({}, state, { day: action.day });
    }
    default:
      return state;
  }
};

export default time;
