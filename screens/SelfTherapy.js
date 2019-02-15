import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

class SelfTherapy extends Component{
  render(){
    return(
    <View>
      {
        list.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{ name: item.icon }}
          />
        ))
      }
    </View>
    )
  }
}
export default SelfTherapy;