import React from 'react';
import Expo from 'expo';
//import * as Rest from './components/RestClient.js';
import Login from './app/components/Login/UserLogin'
import { AppRegistry, AsyncStorage, StyleSheet, Text, Alert, TextInput, Button, View,TouchableHighlight, AlertIOS } from 'react-native';
import{Scene, Router}from 'react-native-router-flux'
var token = null;

export default class main extends React.Component {
  
  render() {
    return (
      <View>
        <Scene key='Login'
          compnent={Login}
        />
      </View>
      );
    }
  }


  /*********************MOVED TO USERLOGIN.JS************************ */
  /*constructor(props){
    super(props);
    this.state = {text: ''};
    this.state = {user: ''};
    this.state = {pass: ''};
  }

  handleUser = (text) => {
    this.setState({user: text})
  }
  handlePass = (text) => {
    this.setState({pass: text})
  }
  login = async (user,pass) => {

  token = await Rest.login(user, pass);

  alert("your token is: "+ token.token);
  }*/
      /*
      <View style={styles.container} >
        <Text style={styles.title}> Login </Text>
        <View style={styles.row} >
          <TextInput
            style={styles.theText}
            placeholder='Username'
            onChangeText = {this.handleUser}
            />
          <TextInput
            style={styles.theText}
            placeholder='Password'
            onChangeText = {this.handlePass}
            />
        </View>
        <View style={styles.row}>
          <Button style={styles.button}
             onPress={ () => this.login(this.state.user,this.state.pass)}
             title="Login"
          />
        </View>
      </View>*/

      /*<View style={styles.container}>
    <View style={styles.row}>
        <Text style={styles.title}>Signup/Login below</Text>
    </View>
    <View style={styles.row}>
        <TouchableHighlight style={styles.button} onPress={this._userSignup} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Signup</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this._userLogin} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
    </View>
</View>*/
 
/*var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30
    },

    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },

    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    flowRight: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
    },
    theText: {
      height: 36,
      padding: 4,
      marginRight: 5,
      marginBottom: 10,
      flexGrow: 1,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#48BBEC',
      borderRadius: 8,
      color: '#48BBEC',
    },
});*/
