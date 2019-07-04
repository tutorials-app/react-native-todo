import React,{ Component } from 'react'
import { View, FlatList, ActivityIndicator, Text } from 'react-native'

export default class FetchExample extends Component {

    constructor(props){
      super(props);
      this.state = { isLoading: true, dataSource: [] };
    }
  
    componentDidMount(){
      return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.setState({
            isLoading: false,
            dataSource: responseJson.movies,
          });
  
        })
        .catch((error) =>{
          console.error(error);
        });
    }
  
    render(){
  
      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }
  
      return(
        <View style={{flex: 1, padding:20}}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text>{item.id}, {item.title}, {item.releaseYear}</Text>}
            keyExtractor={({id}, index) => id}
          />
        </View>
      );
    }
  }