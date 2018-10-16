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
                 />
           </View>);
           
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



let RelationShipLst = [
  {
    value: 'single'
  }, {
    value: 'married'
  }, {
    value: 'relationship'
  }
];
