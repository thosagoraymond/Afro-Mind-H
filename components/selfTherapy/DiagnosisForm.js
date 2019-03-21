import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
export default class DiagnosisForm extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Item>
            <Input placeholder='How are you Feeling?'/>
            <Icon active name='swap' />
          </Item>

          <Item>
            <Input placeholder='Are you Happy?'/>
            <Icon active name='swap' />
          </Item>

          <Item>
            <Input placeholder='Are you angry?'/>
            <Icon active name='swap' />
          </Item>

          <Item>
            <Input placeholder='Did you smile today?'/>
            <Icon active name='swap' />
          </Item>

        </Content>
      </Container>
    );
  }
}