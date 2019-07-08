import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import TodoList from '../components/TodoList';

import { getTodoById, deleteTodoById, updateTodoById } from '../actions';

const mapStateToProps = state => ({
  todos: state.todo.items
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getTodoById,
    deleteTodoById,
    updateTodoById,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);