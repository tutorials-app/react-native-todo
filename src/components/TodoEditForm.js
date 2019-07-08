import React, { Component } from 'react'
import { View, TextInput, Text, Button, StyleSheet, Alert } from 'react-native'
import { withNavigation } from 'react-navigation';

import Input from './Input'

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.todo.id,
      title: props.todo.title,
      image: props.todo.image,
      info: props.todo.info
    }

    this.onChange = this.onChange.bind(this); 
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(name, text) {
    this.setState({[name]: text});
  }

  onSubmit() {
    // Alert.alert(JSON.stringify(this.state))
    const {...todo} = this.state;
    console.log({todo})
    this.props.updateTodo(todo);
    this.props.navigation.navigate('Details');
  } 

  render() { 
    return (
      <View style={styles.container}>
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
    // alignItems: 'center',
  }
})

export default withNavigation(TodoForm);