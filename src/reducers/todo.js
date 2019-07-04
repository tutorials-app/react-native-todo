const initState = {
  items: [
    { id: '1', title: 'Learning React', info: 'A JavaScript library for building user interfaces'},
    { id: '2', title: 'Learning React Native', info: 'Build native mobile apps using JavaScript and React'},
    { id: '3', title: 'Develop React Native Mobile App', info: 'Using React React-Native Redux'},
    { id: '4', title: 'Install Android Studio', info: 'Android Studio provides the fastest tools for building apps on every type of Android device. Create complex layouts with ConstraintLayout by adding constraints from each view to other views and guidelines. Then preview your layout on any screen size by selecting one of various device configurations or by simply resizing the preview window.'},
    { id: '5', title: 'Implement Todo App', info: 'What an awesome app create update delete todo list'},
  ],
  item: { id: '1', title: 'Learning React', info: 'A JavaScript library for building user interfaces' }
}

export default function (state = initState, { type, payload }) {
  switch(type) {
    case 'GET_TODOS': 
      return Object.assign({}, state);
    case 'GET_TODO_BY_ID':
      const { id } = payload;
      const idx = state.items.findIndex(item => item.id === id);
      if(idx < 0) return state;
      
      state.item = state.items[idx];
      
      return Object.assign({}, state);
    default: 
      return state;
  }
}