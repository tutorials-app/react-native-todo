import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { withNavigation } from 'react-navigation'

import EditButton from './AbsoluteButton';

class TodoInfo extends Component {
  constructor(props) {
    super(props);
    
    this.onPressEdit = this.onPressEdit.bind(this);
  }

  onPressEdit() {
    this.props.navigation.navigate('EditTodo');
  }

  render() {
    const { item } = this.props;

    return (
      <View style={styles.container}>
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
        <EditButton icon="edit" bgColor="success" onPress={this.onPressEdit}/>
      </View>
    )
  }
}

export default withNavigation(TodoInfo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // height: 450,
  },
  title: {
    fontSize: 22,
    marginLeft: 10
  },
  info: {
    padding: 10
  }
})