    import {StyleSheet,Dimensions} from 'react-native';
    const win = Dimensions.get('window');
    const ratio = win.width / 576;

    const imageStyle = {
      width: win.width/3.3,
      height: 192 * ratio,
    }
    const myRowStyle = {
      flexDirection: 'row',
      flexWrap:'wrap',
      height:'100%',
      justifyContent:'flex-start',
      alignItems:'center',
      alignContent: 'stretch'
    }
    const bahaTest = {
      backgroundColor: 'red',
      height:30,
      textAlign:'center',
      marginTop: '10%'

    }

    export default styles = StyleSheet.create({
    imageStyle: imageStyle,
    myRowStyle: myRowStyle,
    bahaTest: bahaTest,
  });
