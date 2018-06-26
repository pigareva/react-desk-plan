import { connect } from 'react-redux';
import EmployeeOnDesk from '../components/EmployeeOnDesk';

const mapStateToProps = state => ({
  restartTime: state.time.isDay,
});

export default connect(mapStateToProps)(EmployeeOnDesk);
