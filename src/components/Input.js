import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native'
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
      <ScrollView style={styles.child}>
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
      </ScrollView> 
    )
  }
}

const styles = StyleSheet.create({
  child: {
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    textAlignVertical: 'top',
  },
  input: {
  },
  text: { 
    fontSize: 16,
  },
  textInput: {
    // backgroundColor: colors.light,
    height: 40,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.secondaryLight,
    borderRadius: 10
  }
})