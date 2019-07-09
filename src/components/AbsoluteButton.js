import React, { Component } from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../styles'

export default class AddButton extends Component {
  render() {
    const {
      icon,
      bgColor,
    } = this.props;

    return (
      <TouchableHighlight style={[styles.container, { backgroundColor: colors[bgColor] }]} onPress={() => this.props.onPress()}>
        {/* <Text style={styles.name}>+</Text> */}
        <Icon name={icon} size={20} style={styles.name}></Icon>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 11,
    right: 10,
    bottom: 20,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 25,
    elevation: 1
  },
  name: {
    fontSize: 24,
    color: 'white'
  }
})