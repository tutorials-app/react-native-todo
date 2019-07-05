import React, { Component } from 'react'
import { View, TextInput, Text, Button, StyleSheet, Alert } from 'react-native'
import { withNavigation } from 'react-navigation';

import Input from './Input'

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      info: ''
    }

    this.onChange = this.onChange.bind(this); 
    this.onSubmit = this.onSubmit.bind(this);
    this.focusNextField = this.focusNextField.bind(this);
  }
  
  focusNextField(id) {
    this.inputs[id].focus();
  }

  onChange(name, text) {
    this.setState({[name]: text});
  }

  onSubmit() {
    // Alert.alert(JSON.stringify(this.state))
    this.props.addTodo(this.state);
    this.props.navigation.navigate('Home');
  } 

  render() { 
    return (
      <View style={styles.container}>
        
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