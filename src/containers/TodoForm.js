import { connect } from 'react-redux'

import { addTodo } from '../actions'
import TodoForm from '../components/TodoForm'

const mapDispatchToProps = dispatch => ({
  addTodo: (todo) => dispatch(addTodo(todo))
})

export default connect(null, mapDispatchToProps)(TodoForm)