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
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
  arrayUnion,
  updateDoc,
  documentId,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { onSnapshot } from "firebase/firestore";

import BottomBar from "../components/bottomBar";
let ingredientList = [];
let displayedList = [];

const AddMenu = () => {
  const iconColor = "#8b4514";
  const selectedColor = "#ABC19B";
  const route = useRoute();
  const restName = route.params?.name;

  const [item, setItem] = useState("");
  const [ingredient, setIngredient] = useState("");

  const appIcon = require("../assets/MenuMateLogo.png");

  const restRef = doc(db, "restaurants", restName);

  const menu = [
    {
      item: "name",
      ingredients: ["1", "2", "3"],
    },
    {
      item: "name",
      ingredients: ["1", "2", "3"],
    },
    {
      item: "name",
      ingredients: ["1", "2", "3"],
    },
  ];

  const addItem = async () => {
    const itemToAdd = {
      item: item,
      ingredients: ingredientList,
    };
    await updateDoc(restRef, {
      menu: arrayUnion(itemToAdd),
    }).then(() => {
      setItem("");
      ingredientList = [];
    });
  };

  // const unsub = onSnapshot(doc(db, "restaurants", restName), (doc) => {
  //   console.log("Current data: ", doc.data());
  //   const allData = doc.data();
  // });
  const getDocument = async () => {
    const docRef = doc(db, "restaurants", restName);
    const docSnap = await getDoc(docRef);
    const menu = docSnap.data().menu;

    displayedList.push(menu);
  };

  const addIngredient = () => {
    ingredientList.push(ingredient);

    setIngredient("");
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image source={appIcon} style={styles.appIcon} />
      </View>
      <View style={styles.horizontalLine}></View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Add your menu.</Text>
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.addAllergyContainer}>
          <View style={styles.inputAllergyContainer}>
            <TextInput
              placeholder="Item"
              selectionColor="#8b4513"
              value={item}
              onChangeText={(text) => setItem(text)}
              style={styles.input}
              clearButtonMode="always"
            />
          </View>
          <View style={styles.addButtonContainer}>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText} onPress={addItem}>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.addAllergyContainer}>
          <View style={styles.inputAllergyContainer}>
            <TextInput
              placeholder="Ingredient"
              selectionColor="#8b4513"
              style={styles.input}
              clearButtonMode="always"
              value={ingredient}
              onChangeText={(text) => setIngredient(text)}
            />
          </View>
          <View style={styles.addButtonContainer}>
            <TouchableOpacity style={styles.addButton} onPress={addIngredient}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.allergyDisplayContainer}>
        <View style={styles.flatList}>
          <View style={styles.helpContainer}>
            <Text style={styles.helpHeader}>Need Help?</Text>

            <Text style={styles.helpText}>
              1. Enter in the ingredients for the first item. {"\n"}
              2. Enter in the item and click add, this will submit it and clear
              the ingredient list. {"\n"}
              3. Repeat for all items on the menu.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.buttonText}>Complete Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddMenu;

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

    padding: 0,
  },
  button: {
    backgroundColor: "#8b4513",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: 700, fontSize: 20 },
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
  },
  prompt: {
    fontSize: 20,
  },
  promptContainer: {
    flexDirection: "column",
    gap: "7%",
  },
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
    height: "43%",
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
    color: "black",
  },
  inputsContainer: {
    gap: "10%",
  },
  randomContainer: {
    backgroundColor: "black",
    width: "100%",
    height: "50%",
  },
  helpText: {
    fontSize: 20,

    lineHeight: 30,
  },
  helpHeader: {
    fontSize: 30,
  },
  helpContainer: {
    alignItems: "center",
    height: "200%",
    gap: "25%",
  },
});
