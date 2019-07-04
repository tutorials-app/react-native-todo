import React, { Component } from 'react'
import { View, FlatList, Text, Button, ScrollView, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation';

import TodoItem from './TodoItem'

class TodoList extends Component {
  
  constructor(props) {
    super(props);
    console.log(this.props);
    this.onPress = this.onPress.bind(this);
  }

  onPress(id) {
    this.props.getTodoById(id);
    this.props.navigation.navigate('Details');
  }

  render() {

    return (
      <View style={styles.todoList}>
        {this.props.todos.map((item, idx) => (<TodoItem key={item.id} item={item} onPress={this.onPress}/>))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  todoList : {
    marginTop: 10,
    height: 400,
    width: '100%'
  }
})

export default withNavigation(TodoList);