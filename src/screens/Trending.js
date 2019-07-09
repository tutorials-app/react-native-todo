import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '../styles';

function Grand({ icon, title, color }) {
  return (
    <View style={[styles['grand'], {backgroundColor: colors[color]}]} >
      <Icon name={icon} size={30} color={'#ddd'}/>
      <Text>{title}</Text>
    </View>
  )
}
class Child extends Component {
  render() {
    const {
      titles,
      color,
      icons,
    } = this.props;

    return (
      <View style={[styles['child'],{backgroundColor: colors[color]}]}>
        <Grand icon={icons[0]} title={titles[0]} color={color + 'Dark'}/>
        <Grand icon={icons[1]} title={titles[1]} color={color} />
        <Grand icon={icons[2]} title={titles[2]} color={color + 'Light'}/>
      </View>
    )
  } 
}

export class TrendingScreen extends Component {
  static navigationOptions = {
    title: 'Trending'
  }

  render() {
    return (
      <View style={styles.container}>
        <Child titles={["Tasks", "Finance", "Career"]} color="primary" icons={['list', 'attach-money', 'computer']}/>
        <Child titles={["Team Work", "Gas", "Health Care"]} color="success" icons={['group-add', 'local-gas-station', 'child-care']}/>
        <Child titles={["Internet", "Transportation", "Payment"]} color="info" icons={['wifi', 'directions-car', 'credit-card']}/>
        <View style={[styles.neighbor, { backgroundColor: colors.warningLight }]}>
          <View style={styles.neighborIcon}>
            <Icon name="school" size={30} color="#fff" />
          </View>
          <View style={styles.neighborTitle}>
            <Text>{"Business and Education"}</Text>
          </View>
        </View>
        <View style={[styles.neighbor, { backgroundColor: colors.dangerLight }]}>
          <View style={styles.neighborIcon}>
            <Icon name="person" size={30} color="#fff" />
          </View>
          <View style={styles.neighborTitle}>
            <Text>{"Life and Career"}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  child: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
  },
  grand: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33.33%',
  },
  neighbor: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
  },
  neighborIcon: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  neighborTitle: {
    width: '70%',
    // alignItems: 'center',
    justifyContent: 'center',
  }
})

export default TrendingScreen
