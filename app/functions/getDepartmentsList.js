export default function getDepartmentsList(employees) {
  if (!employees) {
    throw new TypeError('`employees` is not defined')
  }
  const departments = [];
  employees.forEach((employee) => {
    if (!departments.includes(employee.department)) {
      departments.push(employee.department);
    }
  });
  return departments;
}