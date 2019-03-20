import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button } from 'native-base';
import { StyleSheet, View } from 'react-native';

//Main components
import SelfSelfTherapySteps from '../components/selfTherapy/SelfTherapySteps';
import DiagnosisForm from '../components/selfTherapy/DiagnosisForm';

export default class SelfTherapy extends Component {
  constructor(props){
    super(props);

    this.state = {
      firstTimeUser :false
    }
  }
  render() {
    const {firstTimeUser} = this.state;
    return (
      <View style={{ flex: 1}}>
          {firstTimeUser == true? <DiagnosisForm/>: <SelfSelfTherapySteps/>}
      </View>
    );
  }
}