import React, { Component } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

import SignInForm from '../containers/SignInForm'

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
          <View style={styles.container}>
            <SignInForm />
          </View>
        );
      }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
})