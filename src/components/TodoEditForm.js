import React, { Component } from 'react'
import { View, TextInput, Text, Button, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation';

import Input from './Input'
import { colors } from '../styles';
import { ScrollView } from 'react-native-gesture-handler';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    const todo = {
      id: '',
      title: '',
      info: '',
      image: ''
    };
    if(props.todo) { 
      todo.id = props.todo.id;
      todo.title = props.todo.image;
      todo.info = props.todo.info;
      todo.image = props.todo.image;
    }
    this.state = {
      ...todo
    }

    this.onChange = this.onChange.bind(this); 
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(name, text) {
    this.setState({[name]: text});
  }

  onSubmit() {
    const {...todo} = this.state;
    this.props.updateTodo(todo);
    this.props.navigation.navigate('Details');
  } 

  render() { 
    return (
      <View style={styles.container}>
        <ScrollView>
          <Input 
            label="ID" 
            name="id" 
            editable={false}
            value={this.state.id}
            // onChange={this.onChange}
          />
          <Input 
            label="Title" 
            name="title" 
            value={this.state.title}
            onChange={this.onChange}
          />
          <Input 
            label="Image Url" 
            name="image"
            value={this.state.image}
            onChange={this.onChange}
          />
          <Input 
            label="Info" 
            name="info"
            style={{height: 150, textAlignVertical: 'top'}}
            multiline={true}
            numberOfLines={4}
            value={this.state.info}
            onChange={this.onChange}
          />
        </ScrollView>
        
        <View style={styles.btnContainer}>
          <Button title="Submit" onPress={() => this.onSubmit()} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  btnContainer: {
    marginVertical: 10,
    alignItems: 'flex-end',
  }
})

export default withNavigation(TodoForm);