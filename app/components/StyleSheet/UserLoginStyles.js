    import {StyleSheet,Dimensions,Animated} from 'react-native';
///////////////////////////////////UserLogin.JS
const container = {
  justifyContent: 'center',
  marginTop: 50,
  padding: 20,
  backgroundColor: '#ffffff',
}
const title = {
  fontSize: 30,
  alignSelf: 'center',
  marginBottom: 30
}
const buttonText = {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center'
}
const button = {
  height: 36,
  backgroundColor: '#48BBEC',
  borderColor: '#48BBEC',
  borderWidth: 1,
  borderRadius: 8,
  marginBottom: 10,
  alignSelf: 'stretch',
  justifyContent: 'center'
}

const flexRight = {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch',
}
const theText = {
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
}
export default styles = StyleSheet.create({
container: container,
title: title,
buttonText: buttonText,
button: button,
flexRight:flexRight,
theText:theText
});
