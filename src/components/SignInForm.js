import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

import Input from './Input'

export default class SignInForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this); 
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(name, text) {
    this.setState({[name]: text});
  }

  onSubmit() {
    const {...todo} = this.state;
    // this.props.updateTodo(todo);
    this.props.navigation.navigate('Home');
  } 
  render() {
    return (
      <View>
        <View>
          <Input 
            label="Email" 
            name="email" 
            value={this.state.email}
            onChange={this.onChange}
          />
          <Input 
            label="Password" 
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
        </View>
        <Button title="submit" onPress={() => this.onSubmit()}/>
      </View>
    )
  }
}

