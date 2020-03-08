import React, { Component } from 'react';
import {FlatList,ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Navigator from './routes/homeStack';

export default class App extends Component {
  render() {
  return <Navigator/>
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    FlatListItemStyle: {
      padding: 10,
      fontSize: 18,
      height: 44,
    }
});