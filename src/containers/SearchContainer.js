import { connect } from 'react-redux'
import { showModal } from '../actions'
import Search from '../components/Search'
 
const mapStateToProps = state => ({
  events: state.events
});
 
const mapDispatchToProps = dispatch => ({
  showModal: (event) => dispatch(showModal(event, ''))
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
