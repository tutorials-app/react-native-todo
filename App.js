import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image, SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { 
  createStackNavigator, 
  createAppContainer, 
  createBottomTabNavigator, 
  createSwitchNavigator, 
  createDrawerNavigator, } from "react-navigation";

import { 
  HomeScreen, 
  SettingsScreen, 
  DetailsScreen, 
  ModalScreen, 
  SignInScreen, 
  SignUpScreen,
  AuthLoadingScreen,
  AddTodoScreen,
  EditTodoScreen, 
  TrendingScreen} from './src/screens';

import HomeIconWithBadge from './src/components/HomeIconWithBadge'

import rootReducer from './src/reducers';

import { colors } from './src/styles'

const store = createStore(rootReducer);

const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
})

const SettingStack = createStackNavigator({
  Settings: SettingsScreen,
});

const TrendingStack = createStackNavigator({
  Trending: TrendingScreen
})

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
  AddTodo: AddTodoScreen,
  EditTodo: EditTodoScreen,
}, {
  initialRouteName:'Home', 
  cardStyle: {
    backgroundColor: colors.light
  }
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Auth: AuthStack,
  Trending: TrendingStack,
  Settings: SettingStack
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-home`;
        // Sometimes we want to add badges to some icons. 
        // You can check the implementation below.
        IconComponent = HomeIconWithBadge; 
      } else if (routeName === 'Trending') {
        iconName = `ios-bonfire`;
      } else if (routeName === 'Settings') {
        iconName = `ios-settings`;
      } else if (routeName === 'Auth') {
        iconName = `ios-finger-print`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
})

const AppContainer = createAppContainer(TabNavigator);

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
