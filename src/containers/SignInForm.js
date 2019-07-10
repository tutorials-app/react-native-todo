import { connect } from 'react-redux'
import { signIn } from '../actions'
import SignInForm from '../components/SignInForm'

const mapDispatchToProp = dispatch => ({
  signIn: (body) => dispatch(signIn(body))
})

export default connect(null, mapDispatchToProp)(SignInForm)