import React, {Component} from 'react';
import { Text, View } from 'react-native';

export default class Greeting extends Component {
    render() {
      return (
        <View style={{alignItems: 'center'}} >
          <Text style={this.props.style}>Hello {this.props.name}!</Text>
        </View>
      )
    }
  }