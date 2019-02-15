import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class Home extends Component{
  render(){
    const handlePress = () => false
    const {navigate} = this.props.navigation;
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <TouchableOpacity style={styles.stress}>
            <Text style={styles.text}>
               Are You Stressed?
            </Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.selfTherapy} 
           onPress={() => navigate('SelfTherapy')}>
            <Text style={styles.text1}>
               Self Therapy
            </Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.selfTherapy} 
           onPress={() => navigate('groupTherapy')}>
            <Text style={styles.text1}>
               Group Therapy
            </Text>
         </TouchableOpacity>
      </View>
    )
  }
}

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
    backgroundColor:'#ea0000',
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

export default Home;