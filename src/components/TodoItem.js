import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableHighlight, Touchable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../styles'

export default class TodoItem extends Component {
  render() {
    const { 
      item,
      onPressDetails,
      onPressDelete
    } = this.props;

    return ( 
      <TouchableHighlight underlayColor="#fff" onPress={() => onPressDetails(item.id)}>
        <View style={styles.container}>
          <View style={styles.child1}>
            <Text style={styles.item}>{ item.title }</Text>
          </View>
          <View style={styles.child2}>
            <TouchableHighlight style={[styles.btn, styles.btnDelete]} onPress={() => onPressDelete(item.id)}>
              <Icon name="remove" size={20}></Icon>
            </TouchableHighlight>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  child1: {
    width: '80%'
  },
  child2: {
    width: '10%'
  },
  item: {
    fontSize: 16
  },
  btn: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnDelete: {
    backgroundColor: colors.lightDanger,
    borderColor: colors.danger,
  }
})