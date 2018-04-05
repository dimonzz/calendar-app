import { connect } from 'react-redux'
import { hideModal, updateEvent, addEvent } from '../actions'
import EventModal from '../components/EventModal'
 
const mapStateToProps = state => ({
  ...state.modal
})
 
const mapDispatchToProps = {
  hideModal,
  updateEvent,
  addEvent
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventModal)