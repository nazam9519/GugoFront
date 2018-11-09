import React, {Component} from 'react';
import Expo from 'expo';
import * as Rest from '../../lib/RestClient.js';
import {Dropdown} from 'react-native-material-dropdown';
import {StackNavigator} from 'react-navigation';
import {ListItem} from 'react-native-elements';
import {
  AppRegistry,
  AsyncStorage,
  Text,
  Alert,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
  View,
  TouchableHighlight,
  AlertIOS,
  Picker,
  Modal,
  Image,
  ListView
} from 'react-native';

import styles from  './styles.js';

var CheckMark = require("../../../assets/CheckMark.png");
var responseJSON = require("../../../assets/Json/images.json");
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2});
export default class interest extends Component {

  constructor(props) {
    super(props);
  

    this.state = {
      intrstLst: null,
      GPrntIntrst: [],
      isLoading: false,
      pictures: ds.cloneWithRows(responseJSON.image)
    }
  }
  componentDidMount() {
    this.setState({isLoading: true});

    fetch('https://gugo-rpierre23.c9users.io/Meta/interest').then(response => response.json()).then(intLst => this.setState({
      GPrntIntrst: Object.keys(intLst[0]),
      isLoading: false
    }))
    //.then(intLst => this.setState({ GPrntIntrst: Object.keys(intLst[0].Categories),intrstLst: intLst, isLoading: false }))
  }
  render() {
    const {GPrntIntrst, intrstLst, isLoading} = this.state;
    fullIntLst = intrstLst
    return (
      <View style={styles.myBox}>
        <ListView
                 contentContainerStyle={styles.myRowStyle}
                 dataSource={this.state.pictures} //datasource either props/state only
                 pageSize={3}
                 renderRow={(data, rowID, sectionID) => (
                  <TouchableHighlight onPress={ () => this.ImageChecked(sectionID) }>
                   <View style={styles.imageStyle}>
                   <Text style={styles.bahaTest}> {data.title} </Text>
                      <Image
                      style={styles.imageStyle}
                        source={data.Selected ? data.src : CheckMark}/>
                    </View>
                    </TouchableHighlight>
               )} //path here is url that you receive
               renderFooter={this.renderFooter}
                 />

           </View>);
           
  }
  renderFooter = () => {
    return (
      <TouchableHighlight onPress={ () => examplefunction }>
      <View style={styless.button}> 
        <Text style={styless.buttonText}>Show unlinked tags</Text>
      </View>
      </TouchableHighlight>
    )
  }
  ImageChecked(index){

    var imageArray = this.state.pictures._dataBlob.s1;

          if(imageArray[index].Selected == true){

            imageArray[index].Selected = false

          }else{
            imageArray[index].Selected = true
          }

        var newDataSrc = ds.cloneWithRows(imageArray);
        
        this.setState({
          pictures: newDataSrc
        });


  }
}

var styless = StyleSheet.create({
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


let RelationShipLst = [
  {
    value: 'single'
  }, {
    value: 'married'
  }, {
    value: 'relationship'
  }
];
