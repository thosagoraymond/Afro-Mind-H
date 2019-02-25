import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class instructors extends Component{
  render(){
    return(
      <View style = {styles.container}>
          <View style={{ flex: 1 , alignItems: 'center' ,paddingTop: 10}}>
              <Text>Instructors page</Text>
          </View>
          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: "flex-end",
    alignItems: 'center'
  }
})
export default instructors;