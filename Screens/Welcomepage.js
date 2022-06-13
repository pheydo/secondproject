import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  StatusBar
 
} from "react-native";



export default function Welcomepage({ navigation }) {
return(

<SafeAreaView style={Styles.View1}>
    
    <StatusBar  backgroundColor={"green"}/>
    <Image style={Styles.image0} source={require("../Screens/images/shape.png")} />
<View style={Styles.View11}>
<Image  style={Styles.image} source={require("../Screens/images/undraw.png")}/>
   
</View>

<View style={Styles.View111}>
<Text style={Styles.text1}>
        Getting things done with TODO
    </Text>
<Text style={Styles.text2}>
    To get started, we recommend checking out our uick-start guide that’ll walk you through the basics of our  app step-by-step.
    </Text>
</View>
   
   <View style={Styles.View1111}>
   <Pressable
            style={Styles.press1}
            onPress={() => navigation.navigate("Registrationpage")}
          >
            <Text style={Styles.text3}>Get Started</Text>
          </Pressable>
   </View>


        
</SafeAreaView>



);


}

const Styles = StyleSheet.create({

View1:{flex:1,
    backgroundColor:"white",
    padding:20,
    
},
View11:{
    paddingRight:25,
    paddingLeft:25,
    backgroundColor:"white",
    padding: 20,
    top:195,
    
    
},
View111:{
    top:180,
    backgroundColor:"white",
    
    
},
View1111:{

    top:200,
    
    
},


press1: {
    top:5,
    backgroundColor: "green",
    color:"white",
    height: 55,
    borderRadius: 10,
    width:"96%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  text3:{
    
    fontWeight:"bold",
    color:"white",
    fontSize:20
},

text2:{
    padding:35,
    alignSelf:"center",
    color:"black",
    fontSize:15,
    
},
text1:{
    alignSelf:"center",
    color:"black",
    fontSize:20,
    fontWeight:'bold'
},
image :{
   height:150,
   width:150,
    alignSelf: "center",
    justifyContent: "center",
  
},


image0:{
    position:"absolute",
    width:200,
    height:170,
    },


});