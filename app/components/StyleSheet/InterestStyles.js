import {StyleSheet,Dimensions} from 'react-native';
const win = Dimensions.get('window');
const ratio = win.width / 576;
const phonewidth = {width: win.width/3.333333333333333333333};
const phoneheight = {height: win.width/3.3333333333333333333};

//const phoneheight = {height: 192 * ratio};

const imageStylePressed = {
  borderRadius: Math.round(phonewidth.width / 2),
  borderWidth:4,
  borderColor:'#1ec3ff',
  width: phonewidth.width,
  height:phoneheight.height,
}
//HOLDS THE LIST
const imageContainer = {
  flex:1,
  backgroundColor:'white'
}
//WRAPS THE LIST
const bottomTest = {
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-between',
  alignItems:'center',
  alignContent:'space-between'
}
//WRAPS THE IMAGES AND THE TEXT
const bottomItem = {
  margin:3,
  width: phonewidth.width,
  height:phoneheight.height,
}
const bottomItemInner = {
  width:'100%',
  height:'100%',

}
const bahaTest = {
  textAlign:'center',
  marginTop:2,
  height:phoneheight.height / 3,
  width: phonewidth.width,
}
const buttonText = {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
}
const button = {
    position:'absolute',
    bottom:30,
    right:10,
    width:60,
    height:60,
    borderRadius: 30,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    justifyContent: 'center'
}
export default styles = StyleSheet.create({
imageContainer:imageContainer,
bottomTest: bottomTest,
bottomItem: bottomItem,
bottomItemInner: bottomItemInner,
imageStylePressed:imageStylePressed,
bahaTest:bahaTest,
button:button,
buttonText:buttonText,
});
