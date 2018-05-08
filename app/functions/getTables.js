/**
 * Returns grouped employees.
 *
 * @param {Object} departmentIndex
 * @return {Array}
 */
export default function getTables(departmentIndex) {
  if (!departmentIndex) {
    throw new TypeError('`departmentIndex` is not defined')
  }
  const tables = [];
  for (let department in departmentIndex) {
    tables.push(departmentIndex[department]);
  }
  return tables;
}