import { URL_GET_ALL_EMPLOYEES } from '../consts';
import { fetchEmployees } from '../actions';
import store from '../store';

async function getEmployees() {
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

export default getEmployees;
