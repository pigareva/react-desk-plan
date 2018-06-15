import { CURRENT_TIME, NEW_DAY, NEW_HOUR } from '../consts';

let dayNumber = 1;

export const currentTime = time => ({
  type: CURRENT_TIME,
  time,
});

export const newHour = time => ({
  type: NEW_HOUR,
  time,
});

export const newDay = {
  type: NEW_DAY,
  dayNumber: dayNumber += 1,
};
