import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

import Input from './Input'
import { colors } from '../styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

class SignUpForm extends Component {
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
    const {...user} = this.state;
    this.props.signUp(user);
    this.props.navigation.navigate('SignIn');
  } 

  render() {
    return (
      <View style={styles.container}>
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
            secureTextEntry={true}
            value={this.state.password}
            onChange={this.onChange}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button} onPress={() => this.onSubmit()} >
            <Text>Sign up</Text>
          </TouchableOpacity>
          {/* <Button title="submit" onPress={() => this.onSubmit()}/> */}
        </View>
      </View>
    )
  }
}

export default withNavigation(SignUpForm);

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
    backgroundColor: colors.success,
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
  }
})
