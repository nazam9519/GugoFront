import React, {Component} from 'react';
import Expo from 'expo';
import * as Rest from '../../lib/RestClient.js';
import  styles from './styles.js'
import { AppRegistry,
AsyncStorage,
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

      alert("your token is: "+ token.token);
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
};
