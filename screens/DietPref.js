import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const appIcon = require("../assets/MenuMateLogo.png");

const HomeScreen = () => {
  const navigation = useNavigation();

  const vegetarian = [
    "lamb",
    "beef",
    "pork",
    "chicken",
    "turkey",
    "duck",
    "Salmon",
    "Tuna",
    "Cod",
    "Haddock",
    "Trout",
    "Sardines",
    "Mackerel",
    "Tilapia",
    "Catfish",
    "Mahi Mahi",
    "Halibut",
    "Swordfish",
    "Grouper",
    "Snapper",
    "Sea bass",
    "Flounder",
    "Perch",
    "Carp",
    "Anchovy",
    "Sole",
    "Monkfish",
    "Arctic char",
    "Rainbow smelt",
    "Pike",
    "Whitefish",
  ];
  const vegan = [
    "Beef",
    "Pork",
    "Chicken",
    "Turkey",
    "Lamb",
    "Fish",
    "Shrimp",
    "Crab",
    "Lobster",
    "Milk",
    "Cheese",
    "Butter",
    "Cream",
    "Yogurt",
    "Eggs",
    "Mayonnaise",
    "Honey",
    "Gelatin",
    "Casein",
    "Whey",
    "Shellac",
    "Ghee",
    "Lard",
    "Bacon",
    "Sausage",
    "Salami",
    "Pepperoni",
    "Ham",
    "Pâté",
    "Foie gras",
    "Caviar",
    "Gelatin-based candies",
    "Marshmallows",
    "Bone broth",
    "Fish sauce",
    "Oyster sauce",
    "Chicken broth",
    "Worcestershire sauce",
  ];
  const lactoseFree = ["milk", "sour cream", "cheese", "butter"];
  const nutFree = ["peanuts", "almonds", "cashews", "walnuts"];
  const noBeefPork = ["beef", "pork"];

  const vegetarianDiet = () => {
    const docRef = setDoc(doc(db, "users", auth.currentUser?.email), {
      allergies: vegetarian,
    }).then(() => {
      navigation.navigate("AllergyPref");
    });
  };

  const veganDiet = () => {
    const docRef = setDoc(doc(db, "users", auth.currentUser?.email), {
      allergies: vegan,
    }).then(() => {
      navigation.navigate("AllergyPref");
    });
  };

  const lactoseFreeDiet = () => {
    const docRef = setDoc(doc(db, "users", auth.currentUser?.email), {
      allergies: lactoseFree,
    }).then(() => {
      navigation.navigate("AllergyPref");
    });
  };

  const nutFreeDiet = () => {
    const docRef = setDoc(doc(db, "users", auth.currentUser?.email), {
      allergies: nutFree,
    }).then(() => {
      navigation.navigate("AllergyPref");
    });
  };

  const noBeefPorkDiet = () => {
    const docRef = setDoc(doc(db, "users", auth.currentUser?.email), {
      allergies: noBeefPork,
    }).then(() => {
      navigation.navigate("AllergyPref");
    });
  };

  const other = () => {
    const docRef = setDoc(doc(db, "users", auth.currentUser?.email), {
      allergies: [],
    }).then(() => {
      navigation.navigate("AllergyPref");
    });
  };

  return (
    <View style={styles.container} behavior="padding">
      <View style={styles.upperContainer}>
        <Image source={appIcon} style={styles.appIcon} />
      </View>
      <View style={styles.horizontalLine}></View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>First, Choose your Diet.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={vegetarianDiet}>
          <Text style={styles.buttonText}>Vegetarian</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={veganDiet}>
          <Text style={styles.buttonText}>Vegan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={lactoseFreeDiet}>
          <Text style={styles.buttonText}>Lactose Free</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={nutFreeDiet}>
          <Text style={styles.buttonText}>Nut Free</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={noBeefPorkDiet}>
          <Text style={styles.buttonText}>No Beef/Pork</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={other}>
          <Text style={styles.buttonText}>Other</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

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
    backgroundColor: "white",
    width: "100%",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    margin: "4%",
  },
  buttonText: { color: "#556B2F", fontWeight: 500, fontSize: 20 },
});
