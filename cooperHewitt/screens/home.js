import React, { Component } from 'react';
import {FlatList,ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }  
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }
  componentDidMount(){
    fetch('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.departments.getList&access_token=e361d3c3a9e74c30dc2c8c31374d8f66').then(response => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson
      })
    }) .catch((error) => {
      console.error(error);
    });
  }
  _renderItem = ({item}) =>(
  <Text>{item.name} {item.count_objects} Items</Text>
  );
  render() {
    if(this.state.isLoading){
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" animating/>
        </View>
      )
    }
    else {
      return (
        <View style={styles.container}>
          <FlatList 
             data={ this.state.dataSource.departments}
             ItemSeparatorComponent = {this.FlatListItemSeparator}
             renderItem={this._renderItem}
             keyExtractor={
              (item,index) => {
              return item.id;
            }
           }
         />
        </View>
      );
    }
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