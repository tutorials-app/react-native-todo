import React, { Component } from 'react'
import { View, TextInput, Text, Button, StyleSheet } from 'react-native'

import TodoEditForm from "../containers/TodoEditForm";

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
        <TodoEditForm />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})