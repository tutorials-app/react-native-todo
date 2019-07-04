import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default class TodoInfo extends Component {
  
  render() {
    const { item } = this.props;

    return (
      <View>
        <View>
          <Text style={styles.title}>{ item.title }</Text>
        </View>
        <Text style={styles.info}>{ item.info }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginLeft: 10
  },
  info: {
    padding: 10
  }
})