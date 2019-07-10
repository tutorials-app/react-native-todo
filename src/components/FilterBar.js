import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import { colors } from '../styles';

export default class FilterBar extends Component {
  render() {
    const { filter, onFilter } = this.props;

    return (
      <View style={styles.container}>
        <TouchableHighlight 
          style={[styles.filter, filter === 'all' ? styles.active : {}]} 
          onPress={() => onFilter('all')}
        >
          <Text style={styles.text}> All </Text>
        </TouchableHighlight>
        <TouchableHighlight 
          style={[styles.filter, filter === 'todo' ? styles.active : {}]}
          onPress={() => onFilter('todo')}          
        >
          <Text style={styles.text}> To Do </Text>
        </TouchableHighlight>
        <TouchableHighlight 
          style={[styles.filter, filter === 'completed' ? styles.active : {}]}
          onPress={() => onFilter('completed')}
        >
          <Text style={styles.text}> Completed! </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: colors.light
  },
  filter: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '33.33%',
  },
  active: {
    backgroundColor: colors.info
  },
  text: {
    color: colors.primary
  }
})