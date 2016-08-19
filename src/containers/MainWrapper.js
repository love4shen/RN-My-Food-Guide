import { connect } from 'react-redux';
// import { addGoal, deleteGoal, updateProgress, closeBanner, setTimer, clearTimer } from '../actions';
import Main from '../components/Main';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {...state};
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onAddGoalClick: bindActionCreators(addGoal, dispatch),
    // onDeleteGoalClick: bindActionCreators(deleteGoal, dispatch),
    // onUpdateProgressClick: bindActionCreators(updateProgress, dispatch),
    // onCloseBannerClick: bindActionCreators(closeBanner, dispatch),
    // setTimerHelp: bindActionCreators(setTimer, dispatch),
    // clearTimerHelp: bindActionCreators(clearTimer, dispatch),
  };
};

const MainWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

export default MainWrapper;
