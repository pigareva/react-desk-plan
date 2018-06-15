import { URL_CREATE_EMPLOYEE, URL_GET_ALL_EMPLOYEES, URL_UPDATE_EMPLOYEE } from '../consts';
import { fetchEmployees } from '../actions';
import store from '../store';

export async function getEmployees() {
  const res = await fetch(URL_GET_ALL_EMPLOYEES);

  res.json()
    .then(
      (result) => {
        store.dispatch(fetchEmployees({
          employees: result,
          error: false,
        }));
        return result;
      },
      (error) => {
        store.dispatch(fetchEmployees({
          employees: [],
          error,
        }));
      },
    );
}

export async function updateEmployee(employee) {
  const updateRes = await fetch(
    `${URL_UPDATE_EMPLOYEE}${employee._id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(employee),
    },
  );
  return updateRes;
}

export async function createEmployee(employee) {
  const createRes = await fetch(
    `${URL_CREATE_EMPLOYEE}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: employee.name,
        email: employee.email,
        department: employee.department,
        photo: employee.photo,
      }),
    },
  );
  return createRes;
}
