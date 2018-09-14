import React, {Component} from 'react';
import Expo from 'expo';
import * as Rest from '../../lib/RestClient.js';
import {StackNavigator} from 'react-navigation'
import { AppRegistry,
AsyncStorage,
StyleSheet,
Text,
Alert,
TextInput,
Button,
View,
TouchableHighlight,
AlertIOS,
} from 'react-native';


var token = null;

export default class Register extends Component{

    constructor(props){
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
    //alert("your token is: "+ token.token);

    this.props.navigation.navigate('interest')
 }
    render(){
        return(
            <View style={styles.container} >
                <Text style={styles.title}>Login</Text>
                <View style={styles.row} >
                    <TextInput
                        style={styles.theText}
                        placeholder='Username'
                        onChangeText = {this.handleUser}
                    />
                    <TextInput
                        style={styles.theText}
                        secureTextEntry={true}
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
            </View>
        );
    }
}

var styles = StyleSheet.create({
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
    });
    