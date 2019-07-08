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
              <Icon name="close" size={20} color={colors.white}></Icon>
            </TouchableHighlight>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    padding: 20,
    marginVertical: 5,
    // borderWidth: 1,
    borderRadius: 6,
    borderColor: '#ddd',
    // borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    zIndex: 11,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    // marginTop: 10,
  },
  child1: {
    width: '90%'
  },
  child2: {
    width: '10%'
  },
  item: {
    fontSize: 16
  },
  btn: {
    position: 'relative',
    width: 25,
    height: 25,
    bottom: 30,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  btnDelete: {
    backgroundColor: colors.lightDanger,
    borderColor: colors.danger,
  }
})