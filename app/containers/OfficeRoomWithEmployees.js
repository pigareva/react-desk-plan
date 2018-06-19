import { connect } from 'react-redux';
import OfficeRoom from '../components/OfficeRoom';
import { getEmployees } from '../controller/employeesController';
import getCurrentTime from '../functions/getCurrentTime';
import { START_WORKING_DAY_TIME } from '../consts';

const mapStateToProps = state => ({
  data: {
    error: false,
    employees: state.employees.employeesData,
  },
});

const mapDispatchToProps = () => ({
  onSubmit: async () => {
    await getEmployees();
    getCurrentTime(START_WORKING_DAY_TIME);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OfficeRoom);
