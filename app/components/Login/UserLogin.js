import React, {Component} from 'react';
import Expo from 'expo';
import * as Rest from '../../lib/RestClient.js';
import DatePicker from 'react-native-datepicker'
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
Picker,
} from 'react-native';


var token = null;

export default class UserLogin extends Component{

    constructor(props){
        super(props);
        this.state = {text: ''};
        this.state = {user: ''};
        this.state = {pass: ''};
        this.state = {date: "01-01-2018"};
        this.state = {PicX: ''};
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
                <Text style={styles.title}> Login </Text>
                <View style={styles.row} >
                    <TextInput
                        style={styles.theText}
                        placeholder='First Name'
                        onChangeText = {this.handleUser}
                    />
                    <TextInput
                        style={styles.theText}
                        placeholder='Last Name'
                        onChangeText = {this.handleUser}
                    />
                    <TextInput
                        style={styles.theText}
                        placeholder='Username'
                        onChangeText = {this.handleUser}
                    />
                    <TextInput
                        style={styles.theText}
                        placeholder='Email'
                        onChangeText = {this.handleUser}
                    />
                    <DatePicker
                        style={{width: 200, marginBottom: 10}}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="1930-05-01"
                        maxDate="2099-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                    />
                    {/*<Button title="Get Selected Picker Value" onPress={ this.GetSelectedPickerItem } />
                    <Picker
                        selectedValue={this.state.PicX}
                        style={{ height: 50, width: 100}}
                        onValueChange={(itemValue,itemIndex) => this.setState({PicX: itemValue})}>
                        <Picker.Item label="Male" value="Male"/>
                        <Picker.Item label="Female" value="Female"/>
                    </Picker>*/}
                    <TextInput
                        style={styles.theText}
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText = {this.handlePass}
                    />
                    <TextInput 
                        style={styles.theText}
                        placeholder='UserName'
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
    