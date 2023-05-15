import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";

import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  arrayUnion,
  arrayRemove,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
import { onSnapshot } from "firebase/firestore";
import { signOut } from "firebase/auth";

const appIcon = require("../assets/MenuMateLogo.png");

const ProfileScreen = () => {
  const iconColor = "#8b4514";
  const selectedColor = "#ABC19B";
  const navigation = useNavigation();

  const logout = () => {
    signOut(auth).then(() => {
      navigation.navigate("Login");
    });
  };

  return (
    <View style={styles.container} behavior="padding">
      <View style={styles.upperContainer}>
        <Image source={appIcon} style={styles.appIcon} />
      </View>
      <View style={styles.horizontalLine}></View>
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Your Information.</Text>
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.middleText}>{auth.currentUser?.email}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={logout} style={styles.button}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomBarContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Icon name="home" size={40} color={iconColor}></Icon>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Edit");
            }}
          >
            <Icon name="pencil" size={40} color={iconColor}></Icon>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Post");
            }}
          >
            <Icon name="plus-circle" size={40} color={iconColor}></Icon>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Icon name="user-circle" size={40} color={selectedColor}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ABC19B",
  },
  appIcon: {
    width: 63,
    height: 70,
    resizeMode: "contain",
    marginTop: "12%",
  },
  horizontalLine: {
    borderWidth: 1,
    borderColor: "white",

    width: "100%",
  },
  textContainer: {
    margin: "8%",
  },
  text: {
    fontSize: 30,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#8b4513",
    width: "100%",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    margin: "4%",
  },
  buttonText: { color: "white", fontWeight: 500, fontSize: 20 },
  bottomBarContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    gap: "40%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: "5%",
  },
  middleContainer: {
    backgroundColor: "white",
    padding: "7%",
    borderRadius: 10,
  },
  middleText: {
    color: "#556B2F",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "10%",
  },
});
