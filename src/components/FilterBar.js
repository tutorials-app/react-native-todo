import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class FilterBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text> All </Text>
        </View>
        <View>
          <Text> To Do </Text>
        </View>
        <View>
          <Text> Completed! </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row'
  },
  
})