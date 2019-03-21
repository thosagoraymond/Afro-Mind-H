import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import groupImage from '../assets/images/stressed.png';

class Home extends Component{
  render(){
    const handlePress = () => false
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
         <TouchableOpacity style={styles.stress}
          onPress={() => navigate('BotChat')}>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e2e2e2',
    opacity: .65,
    
  },
  stress: {
    marginRight:50,
    marginLeft:50,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#FFFFFF',
    borderRadius:5,
    // borderWidth: 1,
    // borderColor: '#ff3333',
    alignItems: 'center',
    width: '100%',
    height: 150
  },
  text: {
    color: 'black',
    marginTop: 40,
    // fontWeight: 'bold',
    fontSize: 20,
  },
  selfTherapy: {
    marginRight:50,
    marginLeft:50,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#FFFFFF',
    borderRadius:5,
    // borderWidth: 1,
    // borderColor: '#0066ff',
    alignItems: 'center',
    width: '100%',
    height: 120,
    // opacity: .5,
  },
  text1: {
  color: 'black',
  marginTop: 20,
  // fontWeight: 'bold',
  fontSize: 30,
  }
});

export default Home;