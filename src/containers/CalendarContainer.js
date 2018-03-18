import { connect } from 'react-redux'
import { showModal, deleteEvent } from '../actions'
import Calendar from '../components/Calendar'
 
const getMonthEvents = (events, date) => {
  if (!events[date.getFullYear()] || !events[date.getFullYear()][date.getMonth() + 1]) {
    return [];
  }
  return events[date.getFullYear()][date.getMonth() + 1];
}
 
const mapStateToProps = state => ({
  date: state.date,
  events: getMonthEvents(state.events, state.date)
});
 
const mapDispatchToProps = dispatch => ({
  showModal: (event, dateString) => dispatch(showModal(event, dateString)),
  deleteEvent: (id, dateString) => dispatch(deleteEvent(id, dateString)),
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)