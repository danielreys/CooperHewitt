import React, { Component } from 'react';
import {ActivityIndicator, StyleSheet, Text, View, Image, Button, Linking, TouchableOpacity,SafeAreaView } from 'react-native';
export default class listDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listId : this.props.navigation.state.params.listId,
            dataSource: [],
            isLoading : true
        }
    }
    
    //Api Call
    componentDidMount(){
        const data = {id:this.state.listId, token:'e361d3c3a9e74c30dc2c8c31374d8f66'};
        fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.shop.items.getInfo&access_token=${encodeURIComponent(data.token)}&shop_item_id=${encodeURIComponent(data.id)}`).then(response => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson
          })
          console.log(this.state.dataSource.item.images['0']['z']);
        }) .catch((error) => {
          console.error(error);
        });
      }

    render() {
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
          <Text style={styles.name}>{this.state.dataSource.item.name}</Text>
          <Text style={styles.brand}>{this.state.dataSource.item.brand}</Text>
           <Image source={{uri: this.state.dataSource.item.images['0']['d'].url}}
           style={{width: 250, height:250}}
           /> 
           <TouchableOpacity style={styles.buttonM}>
           <Button title="Buy" onPress={() => Linking.openURL(this.state.dataSource.item.shop_url)}/>
           </TouchableOpacity>
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
        backgroundColor: '#fff',
        borderRadius: 0,
    },
    FlatListItemStyle: {
      padding: 40,
      fontSize: 18,
      height: 44,
    },
    name: {
      fontSize: 34,
      color: '#ffc600',
      textAlign: 'center',
      paddingLeft:25,
      paddingRight:25
    },
    brand: {
      fontSize: 28
    },
    buttonM: {
      height:150, 
      width:150,
      marginTop: 20,
    }
});