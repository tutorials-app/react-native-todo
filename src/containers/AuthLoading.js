import { connect } from 'react-redux'
import AuthLoading from '../components/AuthLoadiing'

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(AuthLoading);