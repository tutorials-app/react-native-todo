const initState = {
  items: [
    {
      id: '1',
      title: 'Learning React',
      image: 'https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
      info: 'A JavaScript library for building user interfaces'
    },
    {
      id: '2',
      title: 'Learning React Native',
      image: 'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png',
      info: 'Build native mobile apps using JavaScript and React'
    },
    {
      id: '3',
      title: 'Develop React Native Mobile App',
      image: 'https://www.mytechlogy.com/upload/by_users/MindsterIN/141802112304mobileapplicationimage.png',
      info: 'Using React React-Native Redux'
    },
    {
      id: '4',
      title: 'Install Android Studio', 
      image: 'https://9to5google.com/wp-content/uploads/sites/4/2015/10/android-versions.jpg?quality=82&strip=all&w=1024', 
      info: 'Android Studio provides the fastest tools for building apps on every type of Android device. Create complex layouts with ConstraintLayout by adding constraints from each view to other views and guidelines. Then preview your layout on any screen size by selecting one of various device configurations or by simply resizing the preview window.'
    },
    { 
      id: '5', 
      title: 'Implement Todo App', 
      image: 'https://productivityland.com/wp-content/uploads/best-to-do-list-apps-wedo.png', 
      info: 'What an awesome app create update delete todo list' 
    },
    {
      id: '6',
      title: 'Clean Office',
      image: 'https://homebusinessmag.com/wp-content/uploads/2017/04/Clean-Office-1-e1493048332219.jpg',
      info: 'Clean office on every Friday'
    }
  ],
  item: null
}

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

      return Object.assign({}, state);
    }
    case 'DELETE_TODO_BY_ID': {
      const { id } = payload;
      const idx = state.items.findIndex(item => item.id === id);
      if (idx < 0) return state;

      state.items.splice(idx, 1);

      if (state.item.id === id)
        state.item = null;

      return Object.assign({}, { ...state, items: [...state.items], item: { ...state.item } });
    }
    default:
      return state;
  }
}