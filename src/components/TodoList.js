import React, { Component } from 'react'
import { View, FlatList, Text, Button, ScrollView, StyleSheet, Animated, TouchableOpacity } from 'react-native'
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
      padding: new Animated.Value(0),
      width: new Animated.Value(50),
      height: new Animated.Value(50),
      plusSize: new Animated.Value(24),
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
    const duration = 500;
    Animated.parallel([
      Animated.timing( this.state.padding, {
          toValue: 25,
          duration
        }),
      Animated.timing( this.state.plusSize, {
          toValue: 0,
          duration
        }),
      Animated.timing(this.state.width, {
          toValue: 0,
          duration
        }),
      Animated.timing(this.state.height, {
          toValue: 0,
          duration
        })
    ]).start();
  }

  onEndScroll() {
    const duration = 500;
    Animated.parallel([
      Animated.timing(this.state.padding,{
          toValue: 0,
          duration
        }),
      Animated.timing(this.state.plusSize,{
          toValue: 24,
          duration
        }),
      Animated.timing(this.state.width,{
          toValue: 50,
          duration
        }),
      Animated.timing(this.state.height,{
          toValue: 50,
          duration
        })
    ]).start();
  }

  render() {
    const { padding, width, height, plusSize } = this.state;
    const now = new Date();
    const greeting = now.getHours() < 12 ? 'Good Morning!' : now.getHours() <= 17 ? 'Good Afternoon!': 'Good Evening';
    return (
        <View style={styles.container}>
          <View style={styles.welcome}>
            <Text style={styles.greeting}>{greeting}</Text>
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
          <Animated.View style={[styles.animate, { padding }]}>
            <TouchableOpacity
            onPress={() => this.onPressAdd()}
            >
              <Animated.View style={[styles.child, { width, height}]}>
                <Animated.Text style={[styles.name, { fontSize: plusSize }]}>+</Animated.Text>
              </Animated.View>
            </TouchableOpacity>
          </Animated.View>
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
  },
  animate: {
    position: 'absolute',
    zIndex: 11,
    right: 10,
    bottom: 20,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1
  },
  child: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  name: {
    // fontSize: 24,
    color: 'white'
  }
})

export default withNavigation(TodoList);