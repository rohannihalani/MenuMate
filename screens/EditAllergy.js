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

const appIcon = require("../assets/MenuMateLogo.png");

const EditAllergyScreen = () => {
  const iconColor = "#8b4514";
  const selectedColor = "#ABC19B";

  const allAllergies = [];

  const [allergy, setAllergy] = useState("");

  const allergyRef = doc(db, "users", auth.currentUser?.email);

  const unsub = onSnapshot(doc(db, "users", auth.currentUser?.email), (doc) => {
    // console.log("Current data: ", doc.data());
    const internalArray = doc.data();
    const internalAllergyArray = internalArray.allergies;
    internalAllergyArray.forEach((item) => {
      allAllergies.push(item);
    });
  });

  const addAllergy = async () => {
    await updateDoc(allergyRef, {
      allergies: arrayUnion(allergy),
    });
    setAllergy("");
  };

  const deleteAllergy = async (item) => {
    await updateDoc(allergyRef, {
      allergies: arrayRemove(item),
    });
  };

  const homeScreenRedirect = () => {
    navigation.navigate("Home");
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image source={appIcon} style={styles.appIcon} />
      </View>
      <View style={styles.horizontalLine}></View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Edit Allergy List.</Text>
      </View>
      <View style={styles.addAllergyContainer}>
        <View style={styles.inputAllergyContainer}>
          <TextInput
            placeholder="Allergy"
            value={allergy}
            onChangeText={(text) => setAllergy(text)}
            selectionColor="#8b4513"
            style={styles.input}
            clearButtonMode="always"
          />
        </View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={addAllergy}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.allergyDisplayContainer}>
        <FlatList
          style={styles.flatList}
          data={allAllergies}
          renderItem={({ item }) => (
            <View style={styles.allergyOptionContainer}>
              <TouchableOpacity style={styles.deleteAllergyContainer}>
                <Text style={styles.title}>{`\u2022 ${item}  `}</Text>
                <Icon name="times-rectangle" size={18} color={"red"}></Icon>
              </TouchableOpacity>
            </View>
          )}
        />
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
          <Icon name="pencil" size={40} color={selectedColor}></Icon>
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
          <Icon name="user-circle" size={40} color={iconColor}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditAllergyScreen;

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
  flatList: {
    height: "50%",
    width: "100%",
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
  deleteAllergyContainer: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
  },
  allergyOptionContainer: {
    width: "100%",
  },
});
