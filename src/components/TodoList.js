import React, { Component } from 'react'
import { View, FlatList, Text, Button, ScrollView, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation';

import TodoItem from './TodoItem'
import AddButton from './AbsoluteButton'
import { colors } from '../styles';

class TodoList extends Component {
  
  constructor(props) {
    super(props);
    console.log(this.props);
    this.onPressDetails = this.onPressDetails.bind(this);
    this.onPressDelete = this.onPressDelete.bind(this);
    this.onPressAdd = this.onPressAdd.bind(this);
    this.onPressCheckBox = this.onPressCheckBox.bind(this);

  }
  
  onPressCheckBox(id, completed) {
    this.props.updateTodoById({id, completed});
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
          <View style={styles.welcome}>
            <Text style={styles.greeting}>Good Evening Mr.Banly</Text>
          </View>
          <ScrollView>
            <View style={styles.todoList}>
              {this.props.todos.map((item, idx) => (
                <TodoItem 
                  key={item.id} 
                  item={item} 
                  onPressDetails={this.onPressDetails}
                  onPressDelete={this.onPressDelete}
                  onPressCheckBox={this.onPressCheckBox}
                />
                )
              )}
            </View>
          </ScrollView>
          <AddButton icon="add" bgColor="primary" onPress={this.onPressAdd}/>
        </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    marginTop: 5,
    height: 100,
    backgroundColor: colors.primary,
    marginBottom: -25,
    alignItems: 'center',
    borderRadius: 10
  },
  greeting: {
    marginTop: 10,
    fontSize: 22,
  },
  todoList : {
    marginTop: 10,
    paddingHorizontal: 10,
    // height: 450,
    width: '100%',
  }
})

export default withNavigation(TodoList);