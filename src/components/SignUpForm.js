import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import Input from './Input'

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
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
            label="Username" 
            name="username" 
            value={this.state.username}
            onChange={this.onChange}
          />
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
