import React, {Component} from 'react';
import {Text,View,TouchableHighlight,WebView} from 'react-native';
import {Header,Left, Button, Icon, Title, Body, Right,Content,Card,CardItem,List,ListItem} from 'native-base';
import {NativeModules, processColor } from 'react-native';
const { StatusBarManager } = NativeModules;
import Fa from 'react-native-vector-icons/FontAwesome';
import Globals from './Globals';
import {DrawerNavigator,StackNavigator} from 'react-navigation';



import { NavigationActions } from 'react-navigation'

export default class ViewJob extends Component {


  constructor(){
      super();

  }


componentDidMount(){

}


  render() {

     return (
       <WebView scalesPageToFit={true}
                    renderLoading={()=><Text>Loading...</Text>}
                    renderError={()=><Text>No Internet Connection..</Text>}
                    onError={()=><Text>No Internet Connection..</Text>} source={{uri: ''+this.props.navigation.state.params.url+''}}  />
     );

   }
   static navigationOptions = ({ navigation }) => ({
     headerTitle: Globals.title,
     headerStyle:{backgroundColor:'#AA00FF'},
     headerTitleStyle:{color:'white',aliginItems:'center',fontSize:15},

 });
}


module.export = ViewJob;
