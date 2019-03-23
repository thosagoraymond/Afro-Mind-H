import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    name: 'Raymond Mogodi',
    image: require('../assets/testing.png'),
    participant: '11',
    Activities :  'Yoga , Singing and Dancing',
    // text: 'Card One',
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: require('../assets/splash1.png')
  }
];

class instructors extends Component{
  render(){
    return(
      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text>{item.name}</Text>
                    </Body>
                  </Left>
                </CardItem>
                
                <CardItem cardBody>
                  <Image style={{ height: 180, flex: 1 }} source={item.image} />
                </CardItem>

                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>participants : {item.participant}</Text>
                </CardItem>

                <CardItem>
                    <Text> Meetings </Text>

                    <Text note> Virtual meeting : </Text>

                    <Text note >Physical meeting : </Text >
                </CardItem>

                <CardItem>
                  <Text>Therapist Activities</Text>
                </CardItem>

                <CardItem> 
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.Activities}</Text>
                </CardItem>
                
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}
export default instructors;