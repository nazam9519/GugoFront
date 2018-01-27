import React from 'react';
import { AppRegistry,
AsyncStorage,
StyleSheet,
Text,
View,
TouchableHighlight,
AlertIOS,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
});
