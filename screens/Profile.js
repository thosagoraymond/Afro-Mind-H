import React, { Component } from 'react';
import { StyleSheet, Text, View , Button , TouchableOpacity, Container, Content} from 'react-native';

class Profile extends Component{
  render(){
    return(
      <View style={styles.container}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text>Profile</Text>
          </View>
      </View>
    )
  }
}

//Style starts here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e2e2e2',
    opacity: .65, 
  }
})

export default Profile;