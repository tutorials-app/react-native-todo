import React, { Component } from 'react'
import { Image } from 'react-native'

class LogoTitle extends Component {
    render() {
      return (
        <Image
          source={require('./src/assets/images/logo.jpg')}
          style={{marginLeft: 10, width: 30, height: 30 }}
        />
      );
    }
  }