import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import TodoList from '../components/TodoList';
import { 
  FILTER_ALL,
  FILTER_TODO,
  FILTER_COMPLETED } from '../actions/types'

import { getTodoById, deleteTodoById, updateTodoById, setFilter } from '../actions';

const todoFilter = (todos, filter) => {
  switch(filter.toUpperCase()) {
    case FILTER_ALL: 
      return todos
    case FILTER_TODO: 
      return todos.filter(todo => !todo.completed)
    case FILTER_COMPLETED:
      return todos.filter(todo => todo.completed)
    default: 
    throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: todoFilter(state.todo.items, state.todo.filter)
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setFilter,
    getTodoById,
    deleteTodoById,
    updateTodoById,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);