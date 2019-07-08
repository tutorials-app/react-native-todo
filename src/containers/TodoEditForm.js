import { connect } from 'react-redux'
import { updateTodoById } from '../actions'
import TodoEditForm from '../components/TodoEditForm'

const mapStateToProps = state => ({
  todo: state.todo.item
})

const mapDispatchToProps = dispatch => ({
  updateTodo: todo => dispatch(updateTodoById(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoEditForm);