import React from 'react'
import {
   createSwitchNavigator, 
   createAppContainer, 
   createDrawerNavigator,
   createBottomTabNavigator,
   createStackNavigator
   } from 'react-navigation'; 
import Icon from '@expo/vector-icons/Ionicons'

//bottom nav screen
import Home from '../screens/Homepage';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
//welcome screen
import WelcomeScreen from "../screens/WelcomePage";
//dashboard nav screen
import Dashboard from "../screens/DashboardScreen";

//screens
import SelfTherapyScreen from '../screens/SelfTherapy';
import groupTherapyScreen from '../screens/groupTherapy';
import instructors from '../screens/instructors';

//Bottom tab navigator
const DashboardTabNavigator = createBottomTabNavigator({
  Home,
  Profile,
  Settings,
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
  DashboardTabNavigator:DashboardTabNavigator,
  SelfTherapy: {screen: SelfTherapyScreen},
  groupTherapy: {screen: groupTherapyScreen},
  instructors: {screen: instructors},
  
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
  Dashboard:{screen:DashboardStackNavigator},
    Profile:{screen:Profile},
    Settings:{screen:Settings},
    Logout:{screen:WelcomeScreen}
},{
    navigationOptions:({navigation})=>{
      const { routeName } = navigation.state.routes
        [navigation.state.index];
          return{
            headerTitle: routeName
          };
    }
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  Welcome:{screen: WelcomeScreen},
  Dashboard:{screen: AppDrawerNavigator}
}); 

const AppContainer = createAppContainer(AppSwitchNavigator);
export default AppContainer;