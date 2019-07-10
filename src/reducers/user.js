import {
  SIGN_IN,
  SIGN_UP,
  GET_PROFILE, 
  SIGN_OUT} from '../actions/types'

export default function (state = { isLoggedIn: false, isSignedUp: false }, { type, payload }) {
  switch (type) {
    case SIGN_UP: {
      const { username, email, password } = payload;
      if(!username || !email || !password) return state;

      state.username = username;
      state.email = email;
      state.password = password;
      state.isSignedUp = true;

      return Object.assign({}, {...state});
    }
    case SIGN_IN: {
      if (!state.isSignedUp) return state;
      const { email, password } = payload;
      if (email !== state.email || password !== state.password ) return state;
      
      state.isLoggedIn = true;
      
      return Object.assign({}, {...state})
    }
    case GET_PROFILE: {
      if (!state.isLoggedIn) return state;

      return Object.assign({}, {...state})
    }
    case SIGN_OUT: {
      state = { isLoggedIn: false, isSignedUp: false };

      return Object.assign({}, {...state})
    }
    default: 
      return state;
  }
}