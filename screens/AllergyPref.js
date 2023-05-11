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

import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const appIcon = require("../assets/MenuMateLogo.png");

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{`\u2022 ${title}`}</Text>
  </View>
);

const HomeScreen = () => {
  const navigation = useNavigation();

  const allergyList = getDoc(doc(db, "users", auth.currentUser?.email));

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  const [allergy, setAllergy] = useState("");

  return (
    <View style={styles.container} behavior="padding">
      <View style={styles.upperContainer}>
        <Image source={appIcon} style={styles.appIcon} />
      </View>
      <View style={styles.horizontalLine}></View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Next, Add any Allergies.</Text>
      </View>
      <View style={styles.addAllergyContainer}>
        <View style={styles.inputAllergyContainer}>
          <TextInput
            placeholder="Allergy"
            value={allergy}
            onChangeText={(text) => setAllergy(text)}
            selectionColor="#8b4513"
            style={styles.input}
          />
        </View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.allergyDisplayContainer}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Continue</Text>
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
    backgroundColor: "#8b4513",
    width: "100%",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    margin: "4%",
  },
  buttonText: { color: "white", fontWeight: 500, fontSize: 20 },
  addButton: {
    backgroundColor: "#8b4513",
    padding: "12%",
    borderRadius: 10,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: 700,
    fontSize: 20,
  },
  inputAllergyContainer: {
    width: "60%",
  },
  input: {
    backgroundColor: "white",
    padding: "7%",
    borderRadius: 10,
    fontSize: 20,

    color: "#8b4513",
  },
  addAllergyContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    gap: "10%",
  },
  allergyDisplayContainer: {
    width: "80%",
    margin: "5%",
    padding: "5%",
    backgroundColor: "white",
    borderRadius: 20,
  },
  item: {
    marginVertical: 8,

    // marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});
