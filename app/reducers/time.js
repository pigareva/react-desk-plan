import { CURRENT_TIME, NEW_DAY, NEW_HOUR, START_WORKING_DAY_TIME } from '../consts';

const time = (state = {}, action) => {
  console.log('reduser', state, action);
  switch (action.type) {
    case CURRENT_TIME:
    {
      console.log('reduser current time: ', action.time);
      return Object.assign({}, state, { time: action.time });
    }
    case NEW_HOUR:
      return [
        ...state,
        {
          time: action.time,
          isStartTime: action.isStartTime,
          isEndTime: action.isEndTime,
        },
      ];
    case NEW_DAY:
      return [
        ...state,
        {
          time: START_WORKING_DAY_TIME,
        },
      ];
    default:
      return state;
  }
};

export default time;
