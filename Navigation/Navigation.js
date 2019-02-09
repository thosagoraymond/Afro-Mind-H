import React from 'react'
import { StyleSheet, Text, View , Button , TouchableOpacity} from 'react-native';
import {
   createSwitchNavigator, 
   createAppContainer, 
   createDrawerNavigator,
   createBottomTabNavigator,
   createStackNavigator
   } from 'react-navigation'; 
import Icon from '@expo/vector-icons/Ionicons'

//bottom nav 
import Home from '../screens/Homepage';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
//welcome nav
import WelcomeScreen from "../screens/WelcomePage";
//dashboard nav
import Dashboard from "../screens/DashboardScreen";

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

export default AppContainer;