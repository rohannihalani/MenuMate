import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class BottomBar extends React.Component {
  render() {
    const iconColor = "#8b4514";
    const selectedColor = "#ABC19B";

    return (
      <View style={styles.bottomBarContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="home" size={40} color={selectedColor}></Icon>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="pencil" size={40} color={iconColor}></Icon>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="plus-circle" size={40} color={iconColor}></Icon>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="user-circle" size={40} color={iconColor}></Icon>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
