import React, { Component } from 'react'
import { View, FlatList, Text, Button, ScrollView, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation';

import TodoItem from './TodoItem'
import AddButton from './AbsoluteButton'

class TodoList extends Component {
  
  constructor(props) {
    super(props);
    console.log(this.props);
    this.onPressDetails = this.onPressDetails.bind(this);
    this.onPressDelete = this.onPressDelete.bind(this);
    this.onPressAdd = this.onPressAdd.bind(this);
  }
  
  onPressDetails(id) {
    console.log({id});
    this.props.getTodoById(id);
    this.props.navigation.navigate('Details');
  }

  onPressDelete(id) {
    console.log({id});
    this.props.deleteTodoById(id);
    console.log({todos: this.props.todos});
  }
  onPressAdd() {
    this.props.navigation.navigate('AddTodo')
  }

  render() {

    return (
        <View style={styles.container}>
            <View style={styles.todoList}>
              <ScrollView>
                  {this.props.todos.map((item, idx) => (
                    <TodoItem 
                      key={item.id} 
                      item={item} 
                      onPressDetails={this.onPressDetails}
                      onPressDelete={this.onPressDelete}
                    />
                    )
                  )}
              </ScrollView>
          </View>
          <AddButton icon="add" bgColor="primary" onPress={this.onPressAdd}/>
        </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 460,
    // backgroundColor: '#ddd',
    width: '100%'
  },
  todoList : {
    marginTop: 10,
    paddingHorizontal: 10,
    // height: 450,
    width: '100%',
  }
})

export default withNavigation(TodoList);