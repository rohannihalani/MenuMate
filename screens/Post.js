import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

import BottomBar from "../components/bottomBar";

const PostScreen = () => {
  const iconColor = "#8b4514";
  const selectedColor = "#ABC19B";

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Post Screen</Text>
      <Button
        title="Click Here"
        onPress={() => alert("button clicked!")}
      ></Button>
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
    justifyContent: "center",
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
});
