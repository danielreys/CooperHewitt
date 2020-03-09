import React, { Component } from 'react';
import {FlatList,ActivityIndicator, StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoading: true,
      fullData: [],
    }
  }

  handleSearch = (text) => {
    this.setState({query : text});
  }

  //Flat List separator  
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#000000",
        }}
      />
    );
  }
  //Api call
  componentDidMount(){
    const data = {token:'e361d3c3a9e74c30dc2c8c31374d8f66'}; 
    fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.shop.items.getList&access_token=${encodeURIComponent(data.token)}`).then(response => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        fullData: responseJson
      })
    }) .catch((error) => {
      console.error(error);
    });
  }
  render() {
    const { navigate } = this.props.navigation;

    if(this.state.isLoading){
      return (
        <SafeAreaView style={styles.container}>
          <ActivityIndicator size="large" animating/>
        </SafeAreaView>
      )
    }
    else {
      return (
        <SafeAreaView style={styles.container}>
          <FlatList 
             data={ this.state.fullData.items}
             style={styles.FlatListItemStyle}
             ItemSeparatorComponent = {this.FlatListItemSeparator}
             renderItem={ ({item}) =>(
                <TouchableOpacity onPress={() => navigate('ListDetails', {"listId":item.id})}>
                <Text style={{fontSize:20, paddingTop:20, paddingBottom:20}}>{item.name}</Text>
              </TouchableOpacity>)
             }
             keyExtractor={
              (item,index) => {
              return item.id;
            }
           }
         />
        </SafeAreaView>
      );
    }
  }

}
//styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    FlatListItemStyle: {
      paddingRight: 40,
      paddingLeft: 40,
      fontSize: 50
    }
});