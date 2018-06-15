import { connect } from 'react-redux';
import HeaderClock from '../components/HeaderClock';
import { START_WORKING_DAY_TIME } from '../consts';
import getCurrentTime from '../functions/getCurrentTime';

getCurrentTime(START_WORKING_DAY_TIME);

const mapStateToProps = state => ({ time: state.time.time });

export default connect(mapStateToProps)(HeaderClock);
