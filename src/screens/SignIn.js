import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'

import SignInForm from '../components/SignInForm'

export default class SignInScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: 'Sign In',
      headerRight: (
        <View style={{marginRight: 10}}>
          <Button
            onPress={() => navigation.navigate('SignUp')}
            title="Sign up"
          />
        </View>
      ),
      /* the rest of this config is unchanged */
    };
  };
    
    render() {
        return (
          <View>
            <SignInForm />
          </View>
        );
      }
}