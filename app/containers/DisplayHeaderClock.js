import { connect } from 'react-redux';
import HeaderClock from '../components/HeaderClock';

const mapStateToProps = state => ({ time: state.time.time });

export default connect(mapStateToProps)(HeaderClock);
