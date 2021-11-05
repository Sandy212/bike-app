import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  NativeAppEventEmitter,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Cart from "./screens/Cart";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer style={styles.container}>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home"  component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  }

  // input: {
  //   borderColor: "black",
  //   borderWidth: 1,
  //   borderColor: "black",
  //   marginBottom: 10,
  //   width: "80%",
  //   marginRight: 20,
  //   paddingRight: 52,
  //   color: "red",
  // },
  // getinput: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },
});
