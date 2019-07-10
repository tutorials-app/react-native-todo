import { connect } from 'react-redux'
import { signOut } from '../actions'
import SignOutButton from '../components/SignOutButton'

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
})

export default connect(null, mapDispatchToProps)(SignOutButton);