import { 
  ADD_TODO, 
  GET_TODOS, 
  GET_TODO_BY_ID, 
  UPDATE_TODO_BY_ID, 
  DELETE_TODO_BY_ID,
  SIGN_IN,
  SIGN_UP,
  GET_PROFILE, 
  SIGN_OUT,
  SET_FILTER } from './types'

// TODO =========================
let nextId = 10;

export const addTodo = ({title, image, info}) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextId,
    title,
    image,
    info
  }
})

export const getTodos = () => ({
  type: GET_TODOS,
  payload: {}
});

export const getTodoById = (id) => ({
  type: GET_TODO_BY_ID,
  payload: {
      id
  }
});

export const updateTodoById = body => ({
  type: UPDATE_TODO_BY_ID,
  payload: {
    body
  }
})

export const deleteTodoById = (id) => ({
  type: DELETE_TODO_BY_ID,
  payload: {
    id
  }
})

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: {
    filter
  }
})

// USER ==============================
export const signIn = ({email, password}) => ({
  type: SIGN_IN,
  payload: {
    email,
    password
  }
})

export const signUp = ({username, email, password}) => ({
  type: SIGN_UP,
  payload: {
    username,
    email,
    password
  }
})

export const getProfile = () => ({
  type: GET_PROFILE
})

export const signOut = () => ({
  type: SIGN_OUT
})

