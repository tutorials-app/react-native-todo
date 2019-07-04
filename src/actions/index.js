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