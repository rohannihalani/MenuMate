import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import StartingScreen from "./screens/StartingScreen";
import AllergyPref from "./screens/AllergyPref";
import DietPref from "./screens/DietPref";
import EditAllergyScreen from "./screens/EditAllergy";
import ProfileScreen from "./screens/Profile";
import PostScreen from "./screens/Post";
import CreateRest from "./screens/createRest";
import AddMenu from "./screens/AddMenu";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Start"
          component={StartingScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AllergyPref"
          component={AllergyPref}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DietPref"
          component={DietPref}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Edit"
          component={EditAllergyScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Post"
          component={PostScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Create"
          component={CreateRest}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddMenu"
          component={AddMenu}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
