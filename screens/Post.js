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

import BottomBar from "../components/bottomBar";

const PostScreen = () => {
  const iconColor = "#8b4514";
  const selectedColor = "#ABC19B";

  const appIcon = require("../assets/MenuMateLogo.png");

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image source={appIcon} style={styles.appIcon} />
      </View>
      <View style={styles.horizontalLine}></View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Add your own Restaurant.</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.manageText}>Do you manage a Restaurant?</Text>
        <View style={styles.reasonsContainer}>
          <View style={styles.singleReason}>
            <Icon name="check" size={30}></Icon>
            <Text style={styles.reasonText}>
              Create your own personalized Restaurant page.
            </Text>
          </View>
          <View style={styles.singleReason}>
            <Icon name="check" size={30}></Icon>
            <Text style={styles.reasonText}>Add your own menu.</Text>
          </View>
          <View style={styles.singleReason}>
            <Icon name="check" size={30}></Icon>
            <Text style={styles.reasonText}>
              Reach your target audience and grow your business.
            </Text>
          </View>
          <View style={styles.singleReason}>
            <Icon name="check" size={30}></Icon>
            <Text style={styles.reasonText}>All for free.</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Create");
            }}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
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
          <Icon name="plus-circle" size={40} color={selectedColor}></Icon>
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

export default PostScreen;

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
  manageText: {
    fontSize: 20,
  },
  infoContainer: {
    alignItems: "center",
    flex: 0.93,
    margin: "5%",
  },
  reasonsContainer: {
    backgroundColor: "white",
    marginTop: "10%",
    marginHorizontal: "5%",
    padding: "10%",
    borderRadius: 10,
    gap: "15%",
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
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: 700, fontSize: 16 },
  singleReason: {
    flexDirection: "row",
    gap: "15%",
  },
  reasonText: {
    fontSize: 18,
  },
});
