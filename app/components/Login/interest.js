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


var responseJSON = require("../../../assets/Json/images.json");
var fullIntLst = null;
export default class interest extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    //var pictures = ds.cloneWithRows(responseJSON.image);

    this.state = {
      intrstLst: null,
      GPrntIntrst: [],
      //PrntIntrst: [],
      //ChldInterst: [],
      isLoading: false,
      pictures: ds.cloneWithRows(responseJSON.image)
      // pictures: ds.cloneWithRows([{image:require("../../../assets/carIcon.png"),title: "Car" },{image:require('../../../assets/Health.png'),title: "HEALTH & FITNESS" },{image:require('../../../assets/bike.png'),title: "BIKE" },
      // {image:require('../../../assets/download.png'),title: "YOGA" },{image:require('../../../assets/joe_oakes.png'),title: "JOE OAKES" }, {image:require('../../../assets/nabil.png'),title: "NABIL" },{image:require('../../../assets/wrx.png'),title: "WRX" }])

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

                   <View style={styles.imageStyle}>
                   <Text style={styles.bahaTest}> {data.title} </Text>
                      <Image
                      style={styles.imageStyle}

                        source={data.src}/>

                    </View>
               )} //path here is url that you receive
                 />
           </View>);
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
