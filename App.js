import React, { Component } from 'react';
import { StyleSheet, Text, View , Button , TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'

import {
   createSwitchNavigator, 
   createAppContainer, 
   createDrawerNavigator,
   createBottomTabNavigator,
   createStackNavigator
   } from 'react-navigation'; 

class App extends React.Component {
  render() { 
    return <AppContainer/>;
  }
}
export default App;

//Below are the screen components that can be exported to screens
class WelcomeScreen extends Component{
  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <Button title="Login" 
          onPress={() => this.props.navigation.navigate('Dashboard')}
          />

         <Button title="Sign Up" 
          onPress={() => alert('button pressed')}/>
      </View>
    )
  }
}

class DashboardScreen extends Component{
  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>DashboardScreen</Text>
      </View>
    )
  }
}

class Home extends Component{
  render(){
    const handlePress = () => false
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <TouchableOpacity style={styles.stress}>
            <Text style={styles.text}>
               Are You Stressed?
            </Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.selfTherapy}>
            <Text style={styles.text1}>
               Self Therapy
            </Text>
         </TouchableOpacity>
      </View>
    )
  }
}

class Settings extends Component{
  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Settings</Text>
      </View>
    )
  }
}

class Profile extends Component{
  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Profile</Text>
      </View>
    )
  }
}

//Bottom tab navigator
const DashboardTabNavigator = createBottomTabNavigator({
  Home,
  Profile,
  Settings
},{
  navigationOptions:({navigation})=>{
    const { routeName } = navigation.state.routes
      [navigation.state.index];
        return{
          headerTitle: routeName
        };
  }
});

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator:DashboardTabNavigator
},
{
  defaultNavigationOptions: ({navigation}) => {
    return{
      headerLeft: <Icon style={{paddingLeft:10 }}
      onPress={()=> navigation.openDrawer()} 
      name="md-menu" size={30} />
    };
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard:{
    screen:DashboardStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome:{screen: WelcomeScreen},
  Dashboard:{screen: AppDrawerNavigator}
}); 

const AppContainer = createAppContainer(AppSwitchNavigator);



//Style starts here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stress: {
    marginRight:50,
    marginLeft:50,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'purple',
    borderRadius:75,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    width: 150,
    height: 150
  },
  text: {
    color: 'white',
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 15,
  },
  selfTherapy: {
    marginRight:50,
    marginLeft:50,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'purple',
    borderRadius:60,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    width: 120,
    height: 120
  },
  text1: {
  color: 'white',
  marginTop: 20,
  fontWeight: 'bold',
  fontSize: 15,
  },
});
