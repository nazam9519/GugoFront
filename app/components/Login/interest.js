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
  Dimensions,
  Button,
  View,
  TouchableHighlight,
  TouchableOpacity,
  AlertIOS,
  Picker,
  Modal,
  Image,
  ListView,
  ScrollView
} from 'react-native';

import styles from  '../StyleSheet/InterestStyles.js';

var CheckMark = require("../../../assets/CheckMark.png");
var responseJSON = require("../../../assets/Json/images.json");
var subInterests = [];
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
      <View style={styles.imageContainer}>
        <ScrollView>
           <ListView
             contentContainerStyle={styles.bottomTest}
             dataSource={this.state.pictures} //datasource either props/state only
             pageSize={3}
             renderRow={(data, rowID, sectionID) => (

                <TouchableOpacity  onPress={ () => this.ImageChecked(sectionID) }>
                    <View style={styles.bottomItem}>
                      <Image
                        style={data.Selected ? styles.bottomItemInner  : styles.imageStylePressed}
                        source={data.src}/>
                    </View>

                    <Text style={styles.bahaTest}>  {data.title} </Text>
                </TouchableOpacity>
           )}
           //renderFooter={this.renderFooter}
             />
     </ScrollView>

     <TouchableOpacity onPress={() => this.nextFunction() }>
         <Text>Next</Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={() => this.backFunction() }>
       <Text>Back</Text>
     </TouchableOpacity>

      </View>);

  }
  nextFunction(){
    var newDataSrc = ds.cloneWithRows(subInterests);

    this.setState({
      pictures: newDataSrc
    });

  }

  backFunction(){

  }
  ImageChecked(index){

    var imageArray = this.state.pictures._dataBlob.s1;

          if(imageArray[index].Selected == true){

            imageArray[index].Selected = false;
            subInterests.push(imageArray[index].subcategories);

          }else{
            imageArray[index].Selected = true;
            var indexOfSub = subInterests.indexOf(index);
            subInterests.splice(indexOfSub, 1);
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
