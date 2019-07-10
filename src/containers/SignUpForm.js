import { connect } from 'react-redux'
import { signUp } from '../actions'
import SignUpForm from '../components/SignUpForm'

const mapDispatchToProp = dispatch => ({
  signUp: (body) => dispatch(signUp(body))
})

export default connect(null, mapDispatchToProp)(SignUpForm)