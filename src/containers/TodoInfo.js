import { connect } from 'react-redux'
import TodoInfo from '../components/TodoInfo'
import { updateTodoById } from '../actions'

const mapStateToProps = state => ({
  item: state.todo.item
})

const mapDispatchToProps = dispatch => ({
  updateTodoById: (body) => dispatch(updateTodoById(body))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoInfo);