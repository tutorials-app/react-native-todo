import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native'
import { colors } from '../styles';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'

const Link = ({icon, title, onPress}) => {
  return (
    <TouchableHighlight onPress={() => onPress()}>
      <View style={styles.link}>
        <View style={styles.linkIcon}>
          <Icon name={icon} size={25} color={colors.dark} ></Icon>
        </View>
        <View style={styles.linkTextCon}>
          <Text style={styles.linkText}>{title}</Text>
        </View>
     </View>
    </TouchableHighlight>
  )
}

export class DrawerScreen extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.heander}>
         <View style={styles.portfolio}>
          <View style={styles.avatar}>
            <Image 
              source={{uri: "http://www.sclance.com/images/profile/Profile_1167525.jpg"}} 
              style={styles.avatarImage}
            />
          </View>
          <View style={styles.profile}>
            <View style={styles.profileText}>
              <Text style={styles.textWhite}>Username</Text>
            </View>
            <View style={styles.profileText}>
              <Text style={styles.textWhite}>example@email.com</Text>
            </View>
          </View>
         </View>
         <View style={styles.preview}>
           <View style={styles.previewItem}>
            <Text style={styles.textWhite}>Todos: 16</Text>
           </View>
           <View style={styles.previewItem}>
            <Text style={styles.textWhite}>Completed: 12</Text>
           </View>
         </View>
        </View>
        <View style={styles.content}>
          <ScrollView>
            <Link icon="ios-home" title="Home" onPress={() => navigation.navigate('Home')}/>
            <Link icon="ios-bonfire" title="Trending" onPress={() => navigation.navigate('Trending')}/>
            <Link icon="ios-settings" title="Settings" onPress={() => navigation.navigate('Settings')}/>
            <Link icon="ios-log-out" title="Log out" onPress={() => navigation.navigate('Auth')}/>
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <Text >©2019 Todoapp.com </Text>
          </View>
          <View style={styles.footerRight}>
            <Text>v1.0.0</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default DrawerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heander: {
    height: '25%',
    backgroundColor: colors.dark
  },
  portfolio: {
    height: '70%',
    flexDirection: 'row',
  },
  preview: {
    height: '30%',
    flexDirection: 'row',
    // backgroundColor: colors.warning
  },
  previewItem: {
    width: '50%',
    alignItems: 'center'
  },
  avatar: {
    width: '35%',
    paddingVertical: 10,
    // backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#909090',
    borderRadius: 30,
  },
  textWhite: {
    color: '#909090',
  },
  profile: {
    width: '65%',
    // paddingTop: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
    // backgroundColor: colors.info
  },
  profileText: {
    borderBottomWidth: 1,
    borderColor: '#909090',
    marginBottom: 10,
  },
  content: {
    height: '70%',
    backgroundColor: colors.light,
    borderBottomWidth: 1
  },
  footer: {
    height: '5%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.light
  },
  link: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  linkIcon: {
    width: '20%',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 16,
  },
  linkTextCon: {
    width: '80%',
  },
  footerLeft: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerRight: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})