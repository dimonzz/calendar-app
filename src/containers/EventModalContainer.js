import { connect } from 'react-redux'
import { hideModal, updateEvent, addEvent } from '../actions'
import EventModal from '../components/EventModal'
 
const mapStateToProps = state => ({
  show: state.modal.show,
  event: state.modal.event,
  dateString: state.modal.dateString
});
 
const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  updateEvent: (id, title, participants, description, dateString) => dispatch(updateEvent(id, title, participants, description, dateString)),
  addEvent: (title, participants, description, dateString) => dispatch(addEvent(title, participants, description, dateString)),
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventModal)