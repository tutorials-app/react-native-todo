import React, { Component } from 'react'
import { View, ScrollView, Button, Text, StyleSheet, AsyncStorage } from 'react-native'
import TodoList from '../containers/TodoList'

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};
  
      return {
        title: 'Welcome to the app!',
        headerRight: (
          <Button
            onPress={() => navigation.navigate('MyModal')}
            title="Info"
            color="#000"
          />
        ),
        /* the rest of this config is unchanged */
      };
    };
  
    render() {
  
      return (
          <View style={styles.container}>
            <Text style={styles.screenName}>Home Screen</Text>
            <Button
              title="Go to Details"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <TodoList />
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: { 
      flex:1, 
      alignItems: "center", 
      padding: 10,
      height: 2000
    },
    screenName: {fontSize: 22, color: '#cccfcf', padding: 10}
  });