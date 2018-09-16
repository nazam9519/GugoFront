import React, {Component} from 'react';
import Expo from 'expo';
import * as Rest from '../../lib/RestClient.js';
import { Dropdown } from 'react-native-material-dropdown';
import {StackNavigator} from 'react-navigation';
import { ListItem } from 'react-native-elements';
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
Image,
ListView,
Dimensions 
} from 'react-native';
var responseJSON = require("../../../assets/Json/images.json");
var fullIntLst = null;
export default class interest extends Component{

    constructor(props){
        super(props);  
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
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

      componentDidMount(){
        this.setState({isLoading: true});

        fetch('https://gugo-rpierre23.c9users.io/Meta/interest')
            .then(response => response.json())
            .then(intLst => this.setState({ GPrntIntrst: Object.keys(intLst[0]), isLoading: false }))
            //.then(intLst => this.setState({ GPrntIntrst: Object.keys(intLst[0].Categories),intrstLst: intLst, isLoading: false }))
    }
    render(){
            const { GPrntIntrst, intrstLst , isLoading } = this.state;
            fullIntLst = intrstLst
            const win = Dimensions.get('window');
            const ratio = win.width/576;
        return(
          <View>                

                  <ListView
                  contentContainerStyle={styles.list}
                  dataSource={this.state.pictures} //datasource either props/state only
                  pageSize={3}
                  renderRow={(data, rowID, sectionID) => (
                    
                    <View style={{padding: 5.4, alignSelf: 'flex-start'}}>
                    <Text style={{width: win.width/3.3}}> {data.title} </Text> 
               <Image
               style={{
                width: win.width/3.3,
                height: 192 * ratio,
              }}
              
                 source={data.src}/>
                 
                 </View>
                )} //path here is url that you receive
                  />
            </View>

        );
    }
}

let RelationShipLst = [{
    value: 'single',
  }, {
    value: 'married',
  }, {
    value: 'relationship',
  }];

var styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
      },
      interestText: {
        //width: win.width/3.3
      }
      ,
      list: {
       flexDirection: "row",
        flexWrap: "wrap",
        paddingVertical: 20
         },

      ratingImage: {
        height: 19.21,
        width: 100
      },
      ratingText: {
        paddingLeft: 10,
        color: 'grey'
      },
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
    