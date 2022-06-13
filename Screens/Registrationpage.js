import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  TextInput,
  StatusBar
 
} from "react-native";



export default function Registrationpage({ navigation }) {

    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    const [text1, onChangeText1] = React.useState(null);
    const [number1, onChangeNumber1] = React.useState(null);


return(

<View style={Styles.View1}>
<StatusBar  backgroundColor={"green"}/>
    <Image style={Styles.image0} source={require("../Screens/images/shape.png")} />

    
{/* <View style={Styles.View11}>
    
</View> */}
<View  style={Styles.View111}>
<Text style={Styles.text1}>
        Welcome Onboard
    </Text>
    <Text  style={Styles.text11}>
    Let help you meet your track
    </Text>
<TextInput
        style={Styles.input}
        onChangeText={onChangeText}
        placeholder="Enter full Name"
        value={text}
      />
      <TextInput
        style={Styles.input}
        onChangeText={onChangeText1}
        placeholder="  Email"
        value={text1}
      />
      <TextInput
        style={Styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter password"
        keyboardType="numeric"
      />
       <TextInput
        style={Styles.input}
        onChangeText={onChangeNumber1}
        value={number1}
        placeholder="Confirm password"
        keyboardType="numeric"
      />

<Pressable
            style={Styles.press1}
            onPress={() => navigation.navigate("Profilepage")}
          >
            <Text style={Styles.text111}>Sign up</Text>
          </Pressable>

          <Text style={Styles.text1111}>
              Already have and Account? <Text  style={Styles.text11111}   onPress={() => navigation.navigate("Loginpage")}>Login</Text>
          </Text>
          
</View>


          
        

          {/* <Pressable
            style={Styles.press1}
            onPress={() => navigation.navigate("Welcomepage")}
          >
            <Text style={Styles.text1}>Login</Text>
          </Pressable> */}


        
</View>



);


}

const Styles = StyleSheet.create({

View1:{
    flex:1,
    backgroundColor:"white",
    padding:20
},

// View11:{
// justifyContent:"center",
// alignSelf:"center",
//     top:170,
//     height:"20%",
//     bottom:30,
    
        
// },
View111:{
    justifyContent:"center",
    alignSelf:"center",
    top:-50,
        height:"120%",
        
        
    },
text1:{
   top:30,
    justifyContent:"center",
    alignSelf:"center",
        fontSize:20,
        bottom:4,
    },
    text11:{
        top:30,
        justifyContent:"center",
    alignSelf:"center",
        color:"black",
        fontSize:15,
    },

    text111:{
        justifyContent:"center",
    alignSelf:"center",
        color:"white",
        fontSize:18,
    },
    text1111:{
        top:90,
       alignSelf: "center",
       alignItems: "center",
       justifyContent: "center",
    },
    text11111:{
       
        color:"green",
        
    },

press1: {
    
    backgroundColor: "green",
    height: 58,
    top:80,
    borderRadius: 10,
    width:300,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

image0:{
position:"absolute",
width:200,
height:120,
},
input: {
    top:50,
    height: 45,
    margin: 15,
    borderWidth:0.1,
    padding: 10,
    width:320,
    borderRadius:15,

    
  },

});