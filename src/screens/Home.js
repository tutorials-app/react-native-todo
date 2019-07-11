import React, { Component } from 'react'
import { View, ScrollView, Button, Text, StyleSheet, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import TodoList from '../containers/TodoList'
import SignOutButton from '../containers/SignOutButton'
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};
  
      return {
        title: 'TODO APP!',
        headerLeft: (
          <TouchableHighlight style={styles.menu} onPress={() => navigation.toggleDrawer()}>
            <Icon name="md-menu" size={30} color="#000" ></Icon>
          </TouchableHighlight>
        ),
        headerRight: (
          <TouchableHighlight style={styles.more} onPress={() => navigation.toggleDrawer()}>
            <Icon name="md-more" size={30} color="#000" ></Icon>
          </TouchableHighlight>
        ),
        /* the rest of this config is unchanged */
      };
    };
  
    render() {
  
      return (
        <ImageBackground source={require('../assets/images/background.jpg')} style={{width: '100%', height: '100%'}}>
          <View style={styles.container}> 
            <TodoList />
          </View>
        </ImageBackground>
      );
    }
  }

  const styles = StyleSheet.create({
    container: { 
      flex:1, 
      alignItems: "center", 
      // padding: 10,
      // height: 2000
    },
    menu: {
      width: 30, 
      marginLeft: 10,
      alignItems: 'center'
    },
    more: {
      width: 30, 
      marginRight: 10,
      alignItems: 'center'
    }
  });