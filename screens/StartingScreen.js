import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
} from "react-native";
const appIcon = require("../assets/MenuMateLogo.png");
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const navigation = useNavigation();

  const getStarted = () => {
    navigation.navigate("AllergyPref");
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image source={appIcon} style={styles.appIcon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.infoText}>Welcome To Menu Mate</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={getStarted} style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ABC19B",
  },
  upperContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  appIcon: {
    width: 300,
    height: 450,
    resizeMode: "contain",
    marginTop: 80,
  },
  lowerContainer: {
    flex: 0.5,
    alignItems: "center",
  },

  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    padding: 0,
  },
  button: {
    backgroundColor: "#8b4513",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: 700, fontSize: 16 },
  infoText: {
    fontSize: 30,
    color: "white",
    marginTop: 50,
    marginBottom: 20,
    fontWeight: 700,
  },
});
