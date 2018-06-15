import { connect } from 'react-redux';
import OfficeRoom from '../components/OfficeRoom';
import getEmployees from '../controller/employeesController';

const mapStateToProps = state => ({
  data: {
    error: false,
    employees: state.employees.employeesData || [],
  },
});

const mapDispatchToProps = () => ({
  onSubmit: async () => {
    await getEmployees();
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OfficeRoom);
