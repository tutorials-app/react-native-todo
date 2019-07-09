import React, { Component } from 'react'
import { View, TextInput, Text, Button, StyleSheet } from 'react-native'

import TodoAddForm from "../containers/TodoAddForm";

export default class AddTodoScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.title : 'Add Todo',
    };
  };

  render() {

    return (
      <View style={styles.container}>
        <TodoAddForm />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
})