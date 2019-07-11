import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableHighlight, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../styles'

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(1)
    }

    this.onRemove = this.onRemove.bind(this);
  }

  onRemove(id) {
    Animated.timing(
      this.state.opacity,
      {
        toValue: 0,
        duration: 1000,
      }
    ).start(() => this.props.onPressDelete(id))
    
  }

  render() {
    const { 
      item,
      onPressDetails,
      // onPressDelete,
      onPressCheckBox
    } = this.props;

    const { opacity } = this.state;

    const checkIcon = item.completed? 'check-box': 'check-box-outline-blank';
    const checkColor = item.completed? 'info': 'primary';

    return ( 
      <TouchableHighlight underlayColor="#fff" onPress={() => onPressDetails(item.id)}>
        <Animated.View style={[styles.container, { borderColor: colors[checkColor], opacity}]}>
          <View style={styles.childA}>
            <View style={styles.grandA1}>
              <Text style={styles.item}>{ item.title }</Text>
            </View>
            <View style={styles.grandA2}>
              <TouchableHighlight onPress={() => this.onRemove(item.id)}>
                <Icon name="close" size={20} color={colors.danger}></Icon>
              </TouchableHighlight>
            </View>
            
          </View>
          <View style={styles.childB}>
            <View style={styles.grandB1}>
              <TouchableHighlight style={[styles.btn]} onPress={() => onPressCheckBox(item.id, !item.completed)}>
                <Icon name={checkIcon} size={25} color={colors[checkColor]}></Icon>
              </TouchableHighlight>
              <Text>Completed</Text>
            </View>
            <View style={styles.grandB2}>
              <Text style={styles.date}>{ (new Date()).toDateString() }</Text>
            </View>
          </View>
        </Animated.View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 75,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
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
  childA: {
    flex: 1,
    height: '60%',
    flexDirection: 'row',
  },
  grandA1: {
    width: '93%',
  },
  grandA2: {
    width: '7%',
  },
  childB: {
    flex: 1,
    height: '40%',
    flexDirection: 'row',
    // backgroundColor: colors.light
  },
  grandB1: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: colors.light
  },
  grandB2: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    // backgroundColor: colors.primaryLight
  },
  item: {
    fontSize: 16
  },
  checkbox: {
    width: 25,
    height: 25,
    backgroundColor: colors.lightInfo,
    borderColor: colors.info,
    borderRadius: 15,
  },
  btn: {
    marginRight: 5,
  },
  btnDelete: {
    borderColor: colors.danger,
    position: 'relative',
    width: 20,
    height: 20,
    bottom: 30,
    marginLeft: 15,
  },
  date: {
    fontSize: 11,
    color: colors.light
  }
})