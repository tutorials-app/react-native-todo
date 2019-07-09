import React from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import { colors } from '../styles';

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
      title: "Settings"
    }
    render() {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.picture}>
            <View style={styles.pictureCover}></View>
            <View style={styles.pictureProfileContainer}>
              <View style={styles.pictureProfile}>
                <Text>Hello</Text>
              </View>
            </View>
          </View>
          <View style={styles.toolContainer}>
            <View style={{...styles.tool, backgroundColor: colors.secondary}}></View>
            <View style={{...styles.tool, backgroundColor: colors.info}}></View>
            <View style={{...styles.tool, backgroundColor: colors.warning}}></View>
            <View style={{...styles.tool, backgroundColor: colors.danger}}></View>
          </View>
          <View style={styles.bio}></View>
          <View style={styles.about}></View>
        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: { 
      flex: 1, 
    },
    picture: {
      height: 250,
      backgroundColor: colors.primary
    },
    pictureCover: {
      height: '60%',
      backgroundColor: colors.primaryLight
    },
    pictureProfileContainer: {
      height: '40%',
      marginTop: -50,
      alignItems: 'center',
      // backgroundColor: colors.white
    },
    pictureProfile: {
      flex: 1,
      width: 100,
      backgroundColor: colors.primaryDark
    },
    toolContainer: {
      flex: 1,
      flexDirection: 'row',
      height: 75,
      backgroundColor: colors.info
    },
    tool: {
      width: '25%',
    },
    bio: {
      height: 100,
      backgroundColor: colors.success
    },
    about: {
      height: 200,
      backgroundColor: colors.warning
    }
  })


