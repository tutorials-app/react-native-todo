let nextId = 10;

export const addTodo = ({title, image, info}) => ({
  type: 'ADD_TODO',
  payload: {
    id: ++nextId,
    title,
    image,
    info
  }
})

export const getTodos = () => ({
  type: 'GET_TODOS',
  payload: {}
});

export const getTodoById = (id) => ({
  type: 'GET_TODO_BY_ID',
  payload: {
      id
  }
});

export const updateTodoById = todo => ({
  type: 'UPDATE_TODO_BY_ID',
  payload: {
    todo
  }
})

export const deleteTodoById = (id) => ({
  type: 'DELETE_TODO_BY_ID',
  payload: {
    id
  }
})