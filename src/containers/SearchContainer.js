import { connect } from 'react-redux'
import { showModal } from '../actions'
import Search from '../components/Search'
 
const mapStateToProps = state => ({
  events: state.events
})
 
const mapDispatchToProps = {
  showModal
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
