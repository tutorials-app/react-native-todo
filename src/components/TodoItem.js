import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../styles'

export default class TodoItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.child1}>
          <Text style={styles.item}>{ item.title }</Text>
        </View>
        <View style={styles.child2}>
          <TouchableHighlight style={styles.btnHighlight} onPress={() => this.props.onPress(item.id)}>
            <View style={[styles.btn, styles.btnInfo]}>
              <Icon name="info" size={20}>
              </Icon>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.child3}>
          <TouchableHighlight style={styles.btnHighlight} onPress={() => this.props.onPress(item.id)}>
            <View style={[styles.btn, styles.btnDelete]}>
              <Icon name="delete" size={20}></Icon>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.light,
    padding: 10,
    marginVertical: 5
  },
  child1: {
    width: '66%'
  },
  child2: {
    width: '12%'
  },
  child3: {
    width: '12%'
  },
  item: {
    fontSize: 16
  },
  text: {
    color: '#fff'
  },
  btn: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnHighlight: {
    borderRadius: 10,
  },
  btnInfo: {
    color: colors.info,
    backgroundColor: colors.info,
    borderColor: colors.info,
  },
  btnDelete: {
    color: colors.danger,
    backgroundColor: colors.danger,
    borderColor: colors.danger,
  }
})