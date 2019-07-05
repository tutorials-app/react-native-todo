import React, { Component } from 'react'
import { View, ScrollView, Button, Text, StatusBar, StyleSheet } from 'react-native'

import TodoInfo from '../containers/TodoInfo'

export default class DetailsScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params } = navigation.state;
  
      return {
        title: params ? params.otherParam : 'A Nested Details Screen',
      };
    };
  
    render() {
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID');
      const otherParam = navigation.getParam('otherParam', 'some default value');
      
      return (
          <View style={styles.container}>
            <Text style={styles.screenName}>Details Screen</Text>
            <TodoInfo />

            <View style={styles.homeButton}>
              <Button
                title="Go to Home"
                onPress={() => this.props.navigation.navigate('Home')}
              />
            </View>
            <StatusBar barStyle="default" />
          </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center",
    padding: 10,
  },
  screenName: {fontSize: 22, color: '#cccfcf', padding: 10},
  homeButton: {
    marginTop: 10,
    marginVertical: 10
  }
})