import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ImageBackground,
  ScrollView,
  Switch,
} from "react-native";

export default function Profilepage({}) {
  const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);
  const [isChecked5, setChecked5] = useState(false);

  return (
    <View style={Styles.View1}>
      <StatusBar backgroundColor={"green"} />
      <ImageBackground
        style={Styles.image1}
        source={require("../Screens/images/Rectangle3.png")}
      >
        <Image
          style={Styles.image2}
          source={require("../Screens/images/shape.png")}
        />
        <Image
          style={Styles.image3}
          source={require("../Screens/images/Ellipse8.png")}
        />

        <Text style={Styles.text1}>Welcome to Essosa olamide</Text>
      </ImageBackground>
      <Text style={Styles.text2}>Good evening</Text>

      <Image
        style={Styles.image4}
        source={require("../Screens/images/clock.png")}
      />
      <Text style={Styles.text3}>Task list</Text>

      <ScrollView style={Styles.card}>
        <View style={Styles.checkboxContainer}>
          <Checkbox
            style={Styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={Styles.text5}>Wake up</Text>
        </View>

        <View style={Styles.checkboxContainer}>
          <Checkbox
            style={Styles.checkbox}
            value={isChecked2}
            onValueChange={setChecked2}
          />
          <Text style={Styles.text5}>Wake up</Text>
        </View>

        <View style={Styles.checkboxContainer}>
          <Checkbox
            style={Styles.checkbox}
            value={isChecked3}
            onValueChange={setChecked3}
          />
          <Text style={Styles.text5}>Wake up</Text>
        </View>

        <View style={Styles.checkboxContainer}>
          <Checkbox
            style={Styles.checkbox}
            value={isChecked1}
            onValueChange={setChecked1}
          />
          <Text style={Styles.text5}>Wake up</Text>
        </View>
        <View style={Styles.checkboxContainer}>
          <Checkbox
            style={Styles.checkbox}
            value={isChecked4}
            onValueChange={setChecked4}
          />
          <Text style={Styles.text5}>Wake up</Text>
        </View>
        <View style={Styles.checkboxContainer}>
          <Checkbox
            style={Styles.checkbox}
            value={isChecked5}
            onValueChange={setChecked5}
          />
          <Text style={Styles.text5}>Wake up</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  View1: {
    flex: 1,
    backgroundColor: "white",
  },
  text1: {
    top: -20,
    justifyContent: "center",
    alignSelf: "center",
    color: "white",
    fontSize: 16,
  },
  text2: {
    top: 30,
    marginLeft: 240,
    fontSize: 16,
  },
  text3: {
    top: 30,
    fontSize: 20,
    fontWeight: "bold",
    left: 30,
  },
  text5: {
    padding: 9,
    fontSize: 16,
    fontWeight: "bold",
    flexDirection: "column",
  },

  press1: {
    backgroundColor: "green",
    height: 40,
    borderRadius: 10,
    width: "96%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  image1: {
    width: 400,
    height: 280,
  },
  image2: {
    width: 150,
    height: 100,
  },
  image3: {
    top: -40,
    borderRadius: 200,
    width: 140,
    height: 140,
    justifyContent: "center",
    alignSelf: "center",
  },

  image4: {
    top: 30,
    width: 150,
    height: 150,
    justifyContent: "center",
    alignSelf: "center",
  },
  card: {
    top: 50,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 55,
    width: "95%",
    alignSelf: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  checkbox: {
    alignSelf: "center",
  },
});
