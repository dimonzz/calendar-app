import { connect } from 'react-redux'
import { changeDate } from '../actions'
import Switcher from '../components/Switcher'
 
const mapStateToProps = state => ({
  date: state.date
})
 
const mapDispatchToProps = {
  changeDate
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher)