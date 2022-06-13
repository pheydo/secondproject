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



export default function Loginpage({ navigation }) {

    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);


return(

<View style={Styles.View1}>
<StatusBar  backgroundColor={"green"}/>


    <Image style={Styles.image0} source={require("../Screens/images/shape.png")} />


    <View style={Styles.View11}>
    <Text style={Styles.text1}>
        Welcome Back
    </Text>
<Image  style={Styles.image} source={require("../Screens/images/undrawe.png")}/>
   


<TextInput
        style={Styles.input}
        onChangeText={onChangeText}
        placeholder=" Enter Email"
        value={text}
      />
      <TextInput
      
    
        style={Styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter password"
        keyboardType="numeric"
      />
          </View>


          
    <View    style={Styles.View2}>
    <Text  style={Styles.text2}>
    Forgot password ?
    </Text>



<Pressable
            style={Styles.press1}
            onPress={() => navigation.navigate("Profilepage")}
          >
            <Text style={Styles.text3}>Login</Text>
          </Pressable>
          <Text style={Styles.text4}>
              Dont have an Account? <Text  style={Styles.text5}    onPress={() => navigation.navigate("Registrationpage")}>Sign up</Text>
          </Text>
    </View>
</View>

        




);


}

const Styles = StyleSheet.create({

View1:{
    flex:1,
    backgroundColor:"white"
},

View11:{
    backgroundColor:"white",
    padding: 20,
    top:100,
    
    
    
},
View2:{
    backgroundColor:"white",
    padding: 20,
    top:120,
    
    
    
},

    text1:{
        justifyContent:"center",
        alignSelf:"center",
        bottom:30,
        fontSize:20,
        fontWeight:"bold"
        
    },
    text2:{
        justifyContent:"center",
        alignSelf:"center",
        top:45,
        color:"green",
        
        
    },
    text3:{
        justifyContent:"center",
        alignSelf:"center",
        color:"white",
        fontSize:17,
        
        
    },
    text4:{
        justifyContent:"center",
        alignSelf:"center",
        top:70,
        
    },
    text5:{
        justifyContent:"center",
        alignSelf:"center",
       color:"green",
        
    },

press1: {
    backgroundColor: "green",
    height: 58,
    top:60,
    borderRadius: 10,
    width:"96%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  image0:{
    position:"absolute",
    width:200,
    height:170,
    },
   
    image :{
        height:180,
        width:180,
         alignSelf: "center",
         justifyContent: "center",
       
     },
     input: {
         top:35,
        height: 45,
        margin: 9,
        borderWidth:0.1,
        padding: 10,
        width:320,
        borderRadius:15,
    
        
      },


});