import React, { Component } from 'react'
import { View, ScrollView, Button, Text, StatusBar, StyleSheet } from 'react-native'

import TodoInfo from '../containers/TodoInfo'
import TodoEditForm from '../containers/TodoEditForm'
import { colors } from '../styles';

export default class DetailsScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params } = navigation.state;
  
      return {
        title: params ? params.otherParam : 'Todo Details',
      };
    };
  
    render() {
      const { navigation } = this.props;
      
      return (
          <View style={styles.container}>
            <TodoInfo />
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // padding: 10
    },
  })