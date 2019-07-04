import { connect } from 'react-redux'
import TodoInfo from '../components/TodoInfo'

const mapStateToProps = state => ({
  item: state.todo.item
})

export default connect(mapStateToProps)(TodoInfo);