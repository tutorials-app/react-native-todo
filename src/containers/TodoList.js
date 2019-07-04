import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

import { getTodoById } from '../actions';

const mapStateToProps = state => ({
  todos: state.todo.items
})

const mapDispatchToProps = dispatch => ({
  getTodoById: (id) => dispatch(getTodoById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);