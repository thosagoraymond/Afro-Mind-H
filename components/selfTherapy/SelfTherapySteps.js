import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button } from 'native-base';

export default class SelfTherapySteps extends Component {

  render() {
    return (
      <Container>
        <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="buld" />
              </Button>
            </Left>
            <Body>
              <Text>Mood Capture</Text>
            </Body>
            <Right>
              <Switch value={true} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="chatbubble" />
              </Button>
            </Left>
            <Body>
              <Text>Daily Motivational</Text>
            </Body>
            <Right>
              <Switch value={false} />
              
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="star-half" />
              </Button>
            </Left>
            <Body>
              <Text>Laughter Therapy</Text>
            </Body>
            <Right>
              <Switch value={false} />
              
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="microphone" />
              </Button>
            </Left>
            <Body>
              <Text>Sing & Dance</Text>
            </Body>
            <Right>
              <Switch value={false} />
              
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="pulse" />
              </Button>
            </Left>
            <Body>
              <Text>Deep Breath</Text>
            </Body>
            <Right>
              <Switch value={false} />
              
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="person" />
              </Button>
            </Left>
            <Body>
              <Text>Do Good For Someone</Text>
            </Body>
            <Right>
              <Switch value={false} />
              
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="nutrition" />
              </Button>
            </Left>
            <Body>
              <Text>Diet Alternative</Text>
            </Body>
            <Right>
              <Switch value={false} />
              
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button >
                <Icon active name="bicycle"  style={{fontSize: 30, color: 'orange'}}/>
              </Button>
            </Left>
            <Body>
              <Text>Physical Exercises</Text>
            </Body>
            <Right>
              <Switch value={false} />
              
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}