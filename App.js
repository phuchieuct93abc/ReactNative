import React from 'react';
import List from './src/pages/list'
import {  AppRegistry,Text, View ,Button,FlatList} from 'react-native';

import {  StackNavigator} from 'react-navigation'; 


export  class HomeScreen extends React.Component {
  static navigationOptions = {
   title: 'Welcome',
 }; 

  constructor(props){
      super(props);
      this.state={
        list:[]
      }


  }

  render() {
    const { navigate } = this.props.navigation;

    let buttons = [
      {
        name:"Tin mới",
        key:"url1"
      },
      {
        name:"Công nghệ",
        key:"url2"
      },    {
            name:"Tin mới",
            key:"url3"
          },
          {
            name:"Tin mới",
            key:"url4"
          },
          {
            name:"Công nghệ",
            key:"url5"
          },    {
                name:"Tin mới",
                key:"url6"
              },

    ]

    return (
      <View style={{flex:1}}> 
          <View>
            <Text>Header</Text>
          </View>

          <View style={{flexDirection: 'column',flex:1,flexWrap: 'wrap'}}>
 
                  {buttons.map((item) => {return <Button key={item.key} style={{height:30}} title={item.name} onPress={()=>navigate("List",{item:item})}></Button>})}

          </View>

          <View>
            <Text>Footer</Text>
          </View>
      </View>

    );
  }
}


const Navigator = StackNavigator({
  Home: { screen: HomeScreen }, //Default entry screen
  List: { screen: List }, //Default entry screen
});

export default Navigator