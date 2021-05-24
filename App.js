import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"

import SomeText from './components/SomeText'

export default class App extends React.Component
{
  state = {

    text: "Logged Out",
    ex: "as"

  };


  render() {
    return (
      <View style={styles.classname} >

      <TouchableOpacity onPress={
        () => {
          
            this.setState({

              text: "Logged In"

            });
        }
      }>

        <SomeText vayuui = "Log In"/>

      </TouchableOpacity>


      <TouchableOpacity onPress={
        () => {
          this.setState({

              text:"Logged Out"
          });
        }
      }>

      <SomeText vayuui = "Logout"/>

      </TouchableOpacity>

      <Text style ={{ color: "white", fontSize: 20, marginTop: 10}}>

          {this.state.text}

      </Text>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
  classname : {
    flex : 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green"
   },
   textstyle : {
     fontSize : 20,
     color : "white",
     backgroundColor: "orange",
     paddingHorizontal : 10,
     paddingVertical : 15,
     marginTop: 5

   }
})
