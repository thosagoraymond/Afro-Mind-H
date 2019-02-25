import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, KeyboardAvoidingView , TouchableWithoutFeedback, Keyboard} from 'react-native';


class WelcomeScreen extends Component{
  render(){
    return(
      // <KeyboardAvoidingView behavior="padding" enabled>
      //            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
            <TextInput style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                // underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email})}/>
          </View>

          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
              <TextInput style={styles.inputs}
                  placeholder="**********"
                  secureTextEntry={true}
                  // underlineColorAndroid='transparent'
                  onChangeText={(password) => this.setState({password})}/>
          </View>
          
          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} 
             onPress={() => this.props.navigation.navigate('Dashboard')}>
             <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>

         <TouchableHighlight style={styles.buttonContainer} 
           onPress={() => alert("Forgot password button pressed")}>
            <Text>Forgot your password?</Text>
         </TouchableHighlight>

         <TouchableHighlight style={styles.signUp} 
            onPress={() => alert("Sign up button pressed")}>
            <Text>Sign up</Text>
         </TouchableHighlight>
      </View>
      // </TouchableWithoutFeedback>
      // </KeyboardAvoidingView>
    )
  }
}
  //Style for the login form
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e2e2e2',
        paddingTop: '50%',
        opacity: .65,
      },
      inputContainer: {
          backgroundColor: '#FFFFFF',
          borderRadius:10,
          width:'90%',
          height:45,
          marginBottom:20,
          flexDirection: 'row',
          alignItems:'center'
      },
      inputs:{
          height:45,
          marginLeft:16,
          borderBottomColor: '#FFFFFF',
          flex:1,
          color: '#000000',
          fontSize: 20,
      },
      inputIcon:{
        width:20,
        height:20,
        marginLeft:15,
        justifyContent: 'center'
      },
      buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:5,
        width:250,
        borderRadius:30,
      },
      signUp:{
          marginBottom: 2,
          marginTop: 2,
      },
      loginButton: {
        backgroundColor: "#00b5ec",
      },
      loginText: {
        color: 'white',
        fontSize: 20,
      }
    });

export default WelcomeScreen;