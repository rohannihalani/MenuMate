import React from "react";
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
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState, useEffect } from "react";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

import BottomBar from "../components/bottomBar";

const CreateRest = () => {
  const navigation = useNavigation();
  const iconColor = "#8b4514";
  const selectedColor = "#ABC19B";

  const appIcon = require("../assets/MenuMateLogo.png");

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [cuisine, setCuisine] = useState("");

  const createRestaurant = () => {
    const docRef = setDoc(doc(db, "restaurants", name), {
      city: city,
      cuisine: cuisine,
      name: name,
      menu: {},
    }).then(() => {
      navigation.navigate("AddMenu", { name: name });
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image source={appIcon} style={styles.appIcon} />
      </View>
      <View style={styles.horizontalLine}></View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Create your own page.</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.promptContainer}>
          <Text style={styles.prompt}>Restaurant Name:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.promptContainer}>
          <Text style={styles.prompt}>City:</Text>
          <TextInput
            style={styles.input}
            value={city}
            onChangeText={(text) => setCity(text)}
          />
        </View>
        <View style={styles.promptContainer}>
          <Text style={styles.prompt}>Cuisine:</Text>
          <TextInput
            style={styles.input}
            value={cuisine}
            onChangeText={(text) => setCuisine(text)}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={createRestaurant}>
          <Text style={styles.buttonText}>Add Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateRest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ABC19B",
  },
  bottomBarContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    gap: "40%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: "5%",
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
    fontSize: 29,
  },

  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30%",
    padding: 0,
  },
  button: {
    backgroundColor: "#8b4513",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: 700, fontSize: 16 },
  inputContainer: {
    width: "80%",
    flexDirection: "column",
    gap: "30%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: "5%",
    paddingVertical: "4%",
    borderRadius: 10,
    marginTop: 5,
    color: "#8b4513",
    fontSize: 18,
  },
  prompt: {
    fontSize: 20,
  },
  promptContainer: {
    flexDirection: "column",
    gap: "7%",
  },
});
