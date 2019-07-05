import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default class Input extends Component {

  render() {
    const { 
      label,
      name,
      value,
      multiline,
      numberOfLines,
      onChange
    } = this.props;

    return (
      <View style={styles.child}>
        <View style={styles.label}>
          <Text style={styles.text}>{label}</Text>
        </View>
        <View style={styles.input}>
          <TextInput 
            style={styles.textInput}
            multiline={multiline}
            numberOfLines={numberOfLines}
            placeholder="Type here!"
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
    height: 50,
    marginVertical: 10,
    alignItems: 'center'
  },
  label: {
    width: '20%',
    fontSize: 16
    // backgroundColor: 'blue'
  },
  input: {
    width: '80%',
    // backgroundColor: 'red',
  },
  text: { 
    fontSize: 16
  },
  textInput: {
    height: 50,
    fontSize: 16,
  }
})