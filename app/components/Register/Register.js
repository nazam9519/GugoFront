import React, {Component} from 'react';
import Expo from 'expo';
import * as Rest from '../../lib/RestClient.js';
import DatePicker from 'react-native-datepicker';
import { 
AppRegistry,
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
Modal,
} from 'react-native';

var token = null;
var firstname, lastname, email = null;
export default class UserLogin extends Component{

    constructor(props){
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            UserName: '',
            DateOfBirth: '',
            Email: '',
            modalVisible: false,
            Gender: 'Select Gender',
            private: false,
            Password: ''
        }
      }

      viewModal(visible){
        this.setState({modalVisible: visible});
      }

      handleFirstName = (text) => {
        this.setState({FirstName: text})
      }
      handleLastName = (text) => {
        this.setState({LastName: text})
      }
      handleUname = (text) => {
        this.setState({UserName: text})
      }
      handleEmail = (text) => {
        this.setState({Email: text})
      }
      handleDOB = (date) => {
        this.setState({DateOfBirth: date})
      }
      handleGender = (itemValue) => {
        this.setState({Gender: itemValue})
      }
      handlePassword = (text) => {
        this.setState({Password: text})
      }
    

      register = async () => {
    
      token = await Rest.register(this.state)
    
      alert("your token is: "+ token.token);
      }

    render(){
        return(
            <View style={styles.container} >
                <Text style={styles.title}> Register </Text>
                <View style={styles.row} >
                    <TextInput
                        style={styles.theText}
                        placeholder='First Name'
                        onChangeText = {this.handleFirstName}
                    />
                    <TextInput
                        style={styles.theText}
                        placeholder='Last Name'
                        onChangeText = {this.handleLastName}
                    />
                    <TextInput
                        style={styles.theText}
                        placeholder='Username'
                        onChangeText = {this.handleUname}
                    />
                    <TextInput
                        style={styles.theText}
                        placeholder='Email'
                        onChangeText = {this.handleEmail}
                        keyboardType={'email-address'}                       
                    />
                    <DatePicker
                        style={{width: 200, marginBottom: 10}}
                        date={this.state.DateOfBirth}
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
                        onDateChange={(date)=>{this.handleDOB}}
                    />
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            alert('Modal has been closed.');
                        }}>
                        <View style={styles.container}>
                            <View>
                                    <Picker 
                                        selectedValue={this.state.gender} 
                                        onValueChange={(itemValue,itemIndex) => {this.handleGender}}>
                                        <Picker.Item label="Select Gender"/>
                                        <Picker.Item label="Male" value="M"/>
                                        <Picker.Item label="Female" value="F"/>
                                    </Picker>
                                <Button style={styles.button}
                                    title="Done"
                                    onPress={() => {
                                        this.viewModal(!this.state.modalVisible);
                                    }}
                                />
                            </View>
                        </View>
                    </Modal>

                    <TouchableHighlight
                        onPress={() => {
                        this.viewModal(true);
                        }}>
                        <Text>{printGender(this.state.gender)}</Text>
                    </TouchableHighlight>
                    <TextInput
                        style={styles.theText}
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText = {this.handlePassword}
                    />
                    <TextInput 
                        style={styles.theText}
                        placeholder='UserName'
                        onChangeText = {this.handleUname}
                    />
                </View>
                <View style={styles.row}>
                    <Button style={styles.button}
                        onPress={ () => this.register()}
                        title="Register"
                    />
                    </View>
            </View>
        );
    }
}

const printGender = (sex) => {
    if(sex == 'M'){
        return "Male";
    }
    else if(sex == 'F'){
        return "Female";
    }
    else{
        return "Select Gender";
    }
};

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
    