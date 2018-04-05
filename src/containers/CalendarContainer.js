import { connect } from 'react-redux'
import { showModal, deleteEvent } from '../actions'
import Calendar from '../components/Calendar'

const mapStateToProps = ({ date, events }) => ({
  date,
  events: events[date.getFullYear()] && events[date.getFullYear()][date.getMonth() + 1]
})
 
const mapDispatchToProps = {
  showModal,
  deleteEvent
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)