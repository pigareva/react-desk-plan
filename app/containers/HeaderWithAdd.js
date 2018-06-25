import { connect } from 'react-redux';
import Header from '../components/Header';
import { employeeCreated, addButtonClick } from '../actions';

const mapStateToProps = state => ({
  showAdd: state.button.button,
  sunStyle: state.time.isDay ? 'sun-box-running' : 'sun-box',
  headerStyle: state.time.isDay ? 'header-animation' : '',
});

const mapDispatchToProps = dispatch => ({
  addEmployee: data => dispatch(employeeCreated(data)),
  toggleShowAdd: () => dispatch(addButtonClick()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
