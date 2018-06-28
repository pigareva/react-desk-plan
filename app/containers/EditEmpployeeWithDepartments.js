import { connect } from 'react-redux';
import EditEmployee from '../components/EditEmployee';
import getDepartmentsList from '../functions/getDepartmentsList';

const mapStateToProps = state => ({
  departments: getDepartmentsList(state.employees.employeesData),
});

export default connect(mapStateToProps)(EditEmployee);
