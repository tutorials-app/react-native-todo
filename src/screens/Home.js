import React, { Component } from 'react'
import { View, ScrollView, Button, Text, StyleSheet, ImageBackground } from 'react-native'

import TodoList from '../containers/TodoList'
import SignOutButton from '../containers/SignOutButton'

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};
  
      return {
        title: 'TODO APP!',
        headerRight: (
          <SignOutButton />          
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
    screenName: {fontSize: 22, color: '#cccfcf', padding: 10}
  });