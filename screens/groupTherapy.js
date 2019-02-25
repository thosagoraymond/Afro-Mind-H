import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

class groupTherapy extends Component{
  render(){
    return(
      <View style = {styles.container}>

          <MapView style={styles.map}
              region={{
                 latitude: -26.005496299999997,
                 longitude: 28.114290999999998,
                 latitudeDelta: 0.1,
                 longitudeDelta: 0.1,
              }}
              // underlayColor={'#b84325'}
              zoomEnabled = {true}
          >

              <MapView.Marker
                 coordinate={{
                   latitude: -26.005496299999997,
                   longitude: 28.114290999999998,
                 }}
                 title={"Current position"}
                 description={'Current location'}
                 pinColor={'#00b5ec'}
                 />
          </MapView>
          
          <TouchableOpacity style={styles.locate} 
           onPress={() => this.props.navigation.navigate('instructors')}>
            <Text style={styles.button}>
               Find nearby Therapist
            </Text>
         </TouchableOpacity>

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
  },
  map: {
    position: 'absolute',
    top: 5,
    left: 5,
    bottom: 5,
    right: 5,
    backgroundColor:'#FFFFFF',
  },
  locate: {
    alignItems: 'center', 
    paddingBottom: '5%',
    opacity: .85,
  },
  button:{
    backgroundColor: "#00b5ec",
    color: "white",
    borderRadius: 10,
    padding: 10,
    margin: '5%',
    fontSize: 18,
  }
})
export default groupTherapy;