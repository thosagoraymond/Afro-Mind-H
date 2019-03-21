import React, { Component } from 'react';
import { StyleSheet, Text, View , Button , TouchableOpacity} from 'react-native';
import { Avatar, PricingCard  } from 'react-native-elements';


class Profile extends Component{
  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Avatar
            size="xlarge"
            rounded
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}
            showEditButton
          />
          <PricingCard
            color="#4f9deb"
            title="Points"
            price="R10"
            info={['1 User', 'Basic Support', 'Earn points']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          />
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