import React, { Component } from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'

export default class AddButton extends Component {
  render() {
    
    return (
      <TouchableHighlight style={styles.container} onPress={() => this.props.onPress()}>
        <Text style={styles.name}>+</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 11,
    right: 10,
    bottom: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "blue",
    borderRadius: 25,
    elevation: 8
  },
  name: {
    fontSize: 24,
    color: 'white'
  }
})