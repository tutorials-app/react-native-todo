import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableHighlight } from 'react-native'
import { withNavigation } from 'react-navigation'

import { colors } from '../styles'
import EditButton from './AbsoluteButton';
import Icon from 'react-native-vector-icons/MaterialIcons'

class TodoInfo extends Component {
  constructor(props) {
    super(props);
    
    this.onPressEdit = this.onPressEdit.bind(this);
    this.onPressCheckBox = this.onPressCheckBox.bind(this);
  }

  onPressEdit() {
    this.props.navigation.navigate('EditTodo');
  }
   
  onPressCheckBox(id, completed) {
    this.props.updateTodoById({id, completed})
  }
  render() {
    const { item } = this.props;
    const checkIcon = item.completed? 'check-box': 'check-box-outline-blank';
    const checkColor = item.completed? 'info': 'primary';

    return (
      <View style={styles.container}>
        <EditButton icon="edit" bgColor="success" width={50} height={50} onPress={this.onPressEdit}/>
        <ScrollView style={styles.container}>
          <View style={styles.content}>
            <View style={styles.picture}>
              <Image  
                style={styles.image}
                source={{uri: item.image}} 
              />
              <View style={styles.snapshot} >
                <View style={styles.title} >
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.checkbox}>
                  <View style={styles.icon}>
                    <TouchableHighlight style={[styles.btn]} onPress={() => this.onPressCheckBox(item.id, !item.completed)}>
                      <Icon name={checkIcon} size={30} color={colors[checkColor]}></Icon>
                    </TouchableHighlight>
                  </View>
                  <View style={styles.label} >
                    <Text>Completed</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>Details</Text>
              <Text style={styles.info}>{ item.info }</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default withNavigation(TodoInfo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
  },
  picture: {
    height: 250,
    backgroundColor: colors.white,
    elevation: 2,
    borderRadius: 10,
  },
  details: {
    padding: 10,
    marginTop: 20,
    height: 250,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  image: {
    width: 'auto', 
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  snapshot: {
    height: 130,
    padding: 10,
  },
  checkbox: {
    height: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 5,
  },
  title: {
    fontSize: 22,
    marginBottom: 10
  }
})