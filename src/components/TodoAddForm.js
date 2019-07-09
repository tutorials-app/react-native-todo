import React, { Component } from 'react'
import { View, TextInput, Text, Button, StyleSheet, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation';

import Input from './Input'
import { colors } from '../styles';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      info: ''
    }

    this.onChange = this.onChange.bind(this); 
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(name, text) {
    this.setState({[name]: text});
  }

  onSubmit() {
    this.props.addTodo(this.state);
    this.props.navigation.navigate('Home');
  } 

  render() { 
    return (
      <View style={styles.container}>
        <ScrollView>
          <Input 
            label="Title" 
            name="title" 
            value={this.state.title}
            onChange={this.onChange}
          />
          <Input 
            label="Image Url" 
            name="image"
            value={this.state.image}
            onChange={this.onChange}
          />
          <Input 
            label="Info" 
            name="info"
            style={{height: 150, textAlignVertical: 'top'}}
            multiline={true}
            numberOfLines={4}
            value={this.state.info}
            onChange={this.onChange}
          />
        </ScrollView>
        
        <View style={styles.btnContainer}>
          <Button title="Submit" onPress={() => this.onSubmit()} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 10
  },
  btnContainer: {
    marginVertical: 10,
    height: 30,
    borderRadius: 5,
    alignItems: 'flex-end'
  }
})

export default withNavigation(TodoForm);