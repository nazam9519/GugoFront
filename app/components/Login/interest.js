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

var fullIntLst = null;
export default class interest extends Component{

    constructor(props){
        super(props);  
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
 

          this.state = {
            intrstLst: null,
            GPrntIntrst: [],
            //PrntIntrst: [],
            //ChldInterst: [],
            isLoading: false,
            pictures: ds.cloneWithRows([{image:require("./carIcon.png")},{image:require('./Health.png')},{image:require('./bike.png')},
            {image:require('./download.png')},{image:require('./joe_oakes.png')}, {image:require('./nabil.png')},{image:require('./wrx.png')}])

        }               
      }

      componentDidMount(){
        this.setState({isLoading: true});

        fetch('https://gugo-rpierre23.c9users.io/Meta/interest')
            .then(response => response.json())
            .then(intLst => this.setState({ GPrntIntrst: Object.keys(intLst[0]), isLoading: false }))
            //.then(intLst => this.setState({ GPrntIntrst: Object.keys(intLst[0].Categories),intrstLst: intLst, isLoading: false }))
    }

    //   async componentWillMount() {

    //     //if(intLst == null){
    //         var testm = await Rest.PullInterest();
    //         This.setState({intLst: testm});
    //         // var intGPrntKeys = Object.keys(intLst[0].Categories);
    //         // var intPrntKeys = Object.keys(intLst[0].Categories[intGPrntKeys[0]]);


    //         // console.log('objectKeys: ', intGPrntKeys);
    //         // console.log('objectKeys: ', intPrntKeys);
    //   }

      //Object.keys(this.intLst[0].Categories)
/*          async componentDidMount() {
        var testm = await Rest.PullInterest();
        This.setState({intLst: testm});
       return(<Dropdown label='Relationship Status' data={Object.keys(this.intLst[0].Categories)} onChangeText = {this.handleRStatus} />  );

      } */



/*       async loadUserTypes () {
      //  getInterest();
        return intLst.map(user => (
           //<Picker.Item label={user.userName} value={user.userType} />
           //onPress={ () => this.register()}
           //<Dropdown label='Relationship Status' data={user.Categories} onChangeText = {this.handleRStatus} /> 
        ))
      } */

      renderPrntInt = (l, i) =>{
        return <ListItem
        key={i}
        title={l}
        chevronColor="red"
        hideChevron={true}
        switchButton = {true}
        //subtitle = {onSwitch = l.map(this.handleRStatus) }
        //onSwitch = {subtitle = Object.keys(fullIntLst[0].Categories[l]).map(this.handleRStatus)}
    />
      }
    
    render(){
      const win = Dimensions.get('window');
      const ratio = win.width/192; 
            const { GPrntIntrst, intrstLst , isLoading } = this.state;
            fullIntLst = intrstLst
        return(
            <View>                  

                  <ListView
                  contentContainerStyle={styles.list}
                  dataSource={this.state.pictures} //datasource either props/state only
                  pageSize={3}
                  renderRow={(data, rowID, sectionID) => (
               <Image
               style={{
                width: win.width,
                height: 192 * ratio
              }}
              //resizeMode={'contain'} 
                 source={data.image}/>)} //path here is url that you receive
                  />
            </View>

        );
    }

    handleRStatus = (l,i) => {

        //var Prnt = Object.keys(this.intrstLst[0].Categories[l])
        return(       
            <View style={styles.subtitleView}>  
            <ListItem
            key={i}
            title={l}
            chevronColor="black"
            />))
            </View> 
            )          
    
/*     console.log("i've been hit");
      this.setState(prevState => {

        var Prnt = Object.keys(this.intrstLst[0].Categories[l])
          return(       
        <View style={styles.subtitleView}>
        GPrntIntrst.map((Prnt, i) =>(      
        <ListItem
        key={i}
        title={Prnt}
        chevronColor="black"
    />))
        </View> 
        )       
      }); */
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
      list: {
       flexDirection: "row",
        flexWrap: "wrap"
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
    