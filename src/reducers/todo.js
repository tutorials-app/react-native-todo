import initState from '../store/todo.json';

import { copy } from './helpers'

export default function (state = initState, { type, payload }) {
  switch (type) {
    case 'ADD_TODO': {
      const { ...todo } = payload;

      state.items.push(todo);

      return Object.assign({}, {...state, items: [...state.items]});
    }
    case 'GET_TODOS': {
      return Object.assign({}, state);
    }
    case 'GET_TODO_BY_ID': {
      const { id } = payload;
      const idx = state.items.findIndex(item => item.id === id);
      if (idx < 0) return state;

      state.item = state.items[idx];

      return Object.assign({}, {...state, item: {...state.item}});
    }
    case 'UPDATE_TODO_BY_ID': {
      const { body } = payload;
      if (!body.id) return state;

      const idx = state.items.findIndex(item => item.id === body.id);
      if (idx < 0) return state;

      copy(state.items[idx], body);
      if (state.item && state.item.id === body.id) state.item = state.items[idx];

      return Object.assign({}, { ...state, items: [...state.items], item: { ...state.item } });
    }
    case 'DELETE_TODO_BY_ID': {
      const { id } = payload;
      const idx = state.items.findIndex(item => item.id === id);
      if (idx < 0) return state;

      state.items.splice(idx, 1);

      if (state.item && state.item.id === id)
        state.item = null;

      return Object.assign({}, { ...state, items: [...state.items], item: { ...state.item } });
    }
    default:
      return state;
  }
}