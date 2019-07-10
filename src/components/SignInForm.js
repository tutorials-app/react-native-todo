import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

import Input from './Input'
import { colors } from '../styles'

class SignInForm extends Component {
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
    const {...credential} = this.state;
    this.props.signIn(credential);
    this.props.navigation.navigate('AuthLoading');
  } 
  render() {
    return (
      <View style={styles.container}>
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
            secureTextEntry={true}
            value={this.state.password}
            onChange={this.onChange}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button} onPress={() => this.onSubmit()}>
            <Text>Login</Text>
          </TouchableOpacity>
          {/* <Button title="Login" onPress={() => this.onSubmit()}/> */}
        </View>
      </View>
    )
  }
}

export default withNavigation(SignInForm);

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 10
  },
  btnContainer: {
    marginVertical: 10,
    height: 30,
  },
  button: {
    color: colors.white,
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.primary
  }
})
