import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableHighlight, Touchable, CheckBox } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../styles'

export default class TodoItem extends Component {

  render() {
    const { 
      item,
      onPressDetails,
      onPressDelete,
      onPressCheckBox
    } = this.props;

    const checkIcon = item.completed? 'check-box': 'check-box-outline-blank';
    const checkColor = item.completed? 'info': 'primary';

    return ( 
      <TouchableHighlight underlayColor="#fff" onPress={() => onPressDetails(item.id)}>
        <View style={[styles.container, { borderColor: colors[checkColor]}]}>
          <View style={styles.child1}>
            <TouchableHighlight style={[styles.btn]} onPress={() => onPressCheckBox(item.id, !item.completed)}>
              <Icon name={checkIcon} size={25} color={colors[checkColor]}></Icon>
            </TouchableHighlight>
          </View>
          <View style={styles.child2}>
            <Text style={styles.item}>{ item.title }</Text>
          </View>
          <View style={styles.child3}>
            <TouchableHighlight style={[styles.btn, styles.btnDelete]} onPress={() => onPressDelete(item.id)}>
              <Icon name="close" size={15} color={colors.white}></Icon>
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
    padding: 10,
    marginVertical: 5,
    borderLeftWidth: 2,
    borderRadius: 6,
    borderColor: '#ddd',
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
    width: '10%'
  },
  child2: {
    width: '80%'
  },
  child3: {
    width: '10%'
  },
  item: {
    fontSize: 16
  },
  checkbox: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightInfo,
    borderColor: colors.info,
    borderRadius: 15,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  btnDelete: {
    backgroundColor: colors.lightDanger,
    borderColor: colors.danger,
    position: 'relative',
    width: 20,
    height: 20,
    bottom: 30,
    marginLeft: 15,
  }
})