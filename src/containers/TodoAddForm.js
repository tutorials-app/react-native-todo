import { connect } from 'react-redux'

import { addTodo } from '../actions'
import TodoAddForm from '../components/TodoAddForm'

const mapDispatchToProps = dispatch => ({
  addTodo: (todo) => dispatch(addTodo(todo))
})

export default connect(null, mapDispatchToProps)(TodoAddForm)