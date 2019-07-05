import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'

export default class TodoInfo extends Component {
  
  render() {
    const { item } = this.props;

    return (
      <View>
        <View>
          <Text style={styles.title}>{ item.title }</Text>
        </View>
        <View>
          <Image  
            style={{width: 'auto', height: 150}}
            source={{uri: item.image}} 
          />
        </View>
        <View>
          <Text style={styles.info}>{ item.info }</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginLeft: 10
  },
  info: {
    padding: 10
  }
})