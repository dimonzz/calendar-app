import { connect } from 'react-redux'
import { addEvent, updateEvent, deleteEvent } from '../actions'
import Calendar from '../components/Calendar'
 
const getMonthEvents = (events, date) => {
  if (!events[date.getYear()] || !events[date.getYear()][date.getMonth()]) {
    return [];
  }
  return events[date.getYear()][date.getMonth()];
}
 
const mapStateToProps = state => ({
  date: state.date,
  events: getMonthEvents(state.events, state.date)
});
 
const mapDispatchToProps = dispatch => ({
  addEvent: (date, title, participants, description) => dispatch(addEvent(date, title, participants, description)),
  updateEvent: (id, title, participants, description) => dispatch(updateEvent(id, title, participants, description)),
  deleteEvent: (id) => dispatch(deleteEvent(id)),
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)