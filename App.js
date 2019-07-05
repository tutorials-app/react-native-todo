import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image, SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator } from "react-navigation";

import { 
  HomeScreen, 
  SettingsScreen, 
  DetailsScreen, 
  ModalScreen, 
  SignInScreen, 
  AuthLoadingScreen,
  AddTodoScreen } from './src/screens';
import HomeIconWithBadge from './src/components/HomeIconWithBadge'

import rootReducer from './src/reducers';

const store = createStore(rootReducer);

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
  AddTodo: AddTodoScreen
}, {
  initialRouteName:'Home', 
  cardStyle: {
    // backgroundColor: "#eee"
  }
});

const AppContainer = createAppContainer(HomeStack);

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
