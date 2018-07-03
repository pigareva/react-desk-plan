/**
 * Returns a time in hh-mm format.
 *
 * @param {Number} minutes
 * @return {String}
 */
export default function getTime(minutes) {
  return `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
}
