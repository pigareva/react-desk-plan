import { connect } from 'react-redux';
import Clock from '../components/Clock';

const mapStateToProps = state => ({ time: state.time.time, isGreetingNeeded: true });

export default connect(mapStateToProps)(Clock);
