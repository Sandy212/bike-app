import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  NativeAppEventEmitter,
} from "react-native";

export default function Login({nav}) {
  return (<View style={styles.container}>
    <View style={styles.bikeContainer}>
      <Image style={styles.bike} source={require("../images/5.jpg")}/>
    </View>
    <View>
      <Text style={styles.txt1}>Welcome to</Text>
      <Text  style={styles.txt2}>Power Bike Shop</Text>
      <View style={styles.btn1}>
        <View style={styles.btn1ImgContainer}>
          <Image style={styles.btnLogo} source={require("../images/google.png")}/>
        </View>
        <Text style={styles.btnText}>Login with Gmail</Text>
      </View>
      <View style={[styles.btn1, styles.btn2]}>
        <View style={styles.btn1ImgContainer}>
          <Image style={styles.btnLogo} source={require("../images/apple.png")}/>
        </View>
        <Text style={[styles.btnText,styles.btnText1]}>Login with Apple</Text>
      </View>
      <Text style={styles.action1}>Not a memeber? <Text style={styles.action2}>Sign Up</Text></Text>

    </View>
    {/* <View style={styles.nextScreen} >
      <Button onPress={()=> nav.navigate('Home')} title="Click to next screen" />
    </View> */}

  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    marginTop: 0,
    backgroundColor: "white",
  },
  bikeContainer: {
    width: 200,
    height: 200,
    overflow: "hidden",
    transform: [{ rotateZ: '45deg'}],
    marginLeft: "23%",
    marginVertical: 70,
    borderRadius: 30,
  },
  bike: {
    width: "100%",
    height: "100%",
  },
  txt1: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  txt2: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
    marginVertical: 5,
  },
  btn1: {
    flexDirection: "row",
    marginLeft: "10%",
    textAlign: "center",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#EEEDF2",
    width: "80%",
    marginTop: 10,
  },
  btn2: {
    marginTop: 15,
    backgroundColor: "#1A1A1A",
  },
  btn1ImgContainer: {
    width: 25,
    height: 25,
    overflow: "hidden",
    marginLeft: 50, 
  },
  btnLogo: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  btnText: {
    flexBasis: "90%",
    marginLeft: 5,
    fontSize: 17,
  },
  btnText1: {
    color: "white",
  },
  action1: {
    marginTop: 10,
    color: "#DFDFDF",
    textAlign: "center",
  },
  action2: {
    color: "#FA6401",
  },
  // nextScreen: {
  //   marginTop: 70,
  //   textAlign: "center",
  //   width: 200,
  //   overflow: "hidden",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flex: 1,

  // }
})