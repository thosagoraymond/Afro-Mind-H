import React, { Component } from 'react';
import { StyleSheet, Text, View , Button , TouchableOpacity} from 'react-native';


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

export default WelcomeScreen;