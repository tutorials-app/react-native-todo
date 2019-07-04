import React, {Component} from 'react';
import {Text} from 'react-native';

export default class Blink extends Component {
    componentDidMount() {
      setInterval(() => (
        this.setState(prevState => ({
          isShowingText: !prevState.isShowingText
        }))
        ), 1000);
    }
  
    state = {
      isShowingText: true
    };
  
    render() {
      if(!this.state.isShowingText) return <Text style={this.props.style}>{' '}</Text>;
  
      return (<Text style={this.props.style}>{this.props.text}</Text>)
    }
  }