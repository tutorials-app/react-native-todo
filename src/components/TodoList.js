import React, { Component } from 'react'
import { View, FlatList, Text, Button, ScrollView, StyleSheet, Animated } from 'react-native'
import { withNavigation } from 'react-navigation';

import TodoItem from './TodoItem'
import AddButton from './AbsoluteButton'
import FilterBar from './FilterBar'
import { colors } from '../styles';

class TodoList extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      filter: 'all',
    }
    props.setFilter(this.state.filter);

    this.onPressDetails = this.onPressDetails.bind(this);
    this.onPressDelete = this.onPressDelete.bind(this);
    this.onPressAdd = this.onPressAdd.bind(this);
    this.onPressCheckBox = this.onPressCheckBox.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.onEndScroll = this.onEndScroll.bind(this);
  }
  
  onPressCheckBox(id, completed) {
    this.props.updateTodoById({id, completed});
  }
  
  onPressDetails(id) {
    this.props.getTodoById(id);
    this.props.navigation.navigate('Details');
  }

  onPressDelete(id) {
    this.props.deleteTodoById(id);
  }
  onPressAdd() {
    this.props.navigation.navigate('AddTodo')
  }

  onFilter(filter) {
    this.props.setFilter(filter);
    this.setState({filter});
  }

  handleScroll() {
  }
  onEndScroll() {

  }
  render() {
    const { padding } = this.state;
    return (
        <View style={styles.container}>
          <View style={styles.welcome}>
            <Text style={styles.greeting}>Good Evening Mr.Banly</Text>
          </View>
          <View style={styles.filter}>
            <FilterBar filter={this.state.filter} onFilter={this.onFilter}/>
          </View>
          <ScrollView 
            onMomentumScrollBegin={() => this.handleScroll()} 
            scrollEventThrottle={50} 
            onMomentumScrollEnd={() => this.onEndScroll()}>
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
          <AddButton icon="add"  bgColor="primary" onPress={this.onPressAdd}/>
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
    height: 80,
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
    width: '100%',
  },
  filter: {
    height: 30,
    paddingHorizontal: 15,
  }
})

export default withNavigation(TodoList);