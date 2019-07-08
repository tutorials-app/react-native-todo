import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { colors } from '../styles';

export default class Input extends Component {

  render() {
    const { 
      label,
      name,
      value,
      onChange,
      style,
      ...options
    } = this.props;

    return (
      <View style={styles.child}>
        <View style={styles.label}>
          <Text style={styles.text}>{label}</Text>
        </View>
        <View style={styles.input}>
          <TextInput 
            style={{...styles.textInput, ...style}}
            {...options}
            placeholder="Type here!"
            placeholderTextColor={colors.light}
            value={value}
            onChangeText={(text) => onChange(name, text)}
          />
        </View>
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  child: {
    flexDirection: 'row',
    width: '100%',
    // height: 50,
    marginVertical: 5,
    alignItems: 'center',
    backgroundColor: colors.lightWarning
  },
  label: {
    width: '20%',
    fontSize: 16,
    // backgroundColor: 'blue'
    textAlignVertical: 'top',
  },
  input: {
    width: '80%',
    // backgroundColor: 'red',
  },
  text: { 
    fontSize: 16,
    // textAlignVertical: 'top',
  },
  textInput: {
    backgroundColor: colors.light,
    height: 40,
    fontSize: 16,
  }
})