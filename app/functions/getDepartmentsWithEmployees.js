/**
 * Returns an indexed departments.
 *
 * @param {Array} employees
 * @return {Object}
 */
export default function getDepartmentsWithEmployees(employees) {
  if (!employees) {
    throw new TypeError('`employees` is not defined');
  }
  const departmentIndex = {};

  employees.forEach((employee) => {
    const department = employee.department;

    if (departmentIndex[department]) {
      departmentIndex[department].employees.push(employee);
    } else {
      departmentIndex[department] = {
        department,
        employees: [employee],
      };
    }
  });

  return departmentIndex;
}
