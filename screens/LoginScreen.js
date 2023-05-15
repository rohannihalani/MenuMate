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
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth/react-native";
import { useNavigation } from "@react-navigation/core";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const appIcon = require("../assets/MenuMateLogo.png");

  const navigation = useNavigation();

  // const secondaryColor = "#505c48";
  const secondaryColor = "#8b4513";
  // const secondaryColor = "black";

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       navigation.navigate("Home");
  //     }
  //   });

  //   return unsubscribe;
  // }, []);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered in with: ", user.email);
        setEmail("");
        setPassword("");
        navigation.navigate("Start");
        // }).catch((error) => {
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
      }
    );
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with: ", user.email);
        setEmail("");
        setPassword("");
        navigation.navigate("Home");
      }
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.upperContainer}>
        <Image source={appIcon} style={styles.appIcon} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          selectionColor={secondaryColor}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          selectionColor={secondaryColor}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ABC19B",
  },
  inputContainer: { width: "80%" },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    color: "#8b4513",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#8b4513",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: 700, fontSize: 16 },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#8b4513ro",
    borderWidth: 2,
  },
  buttonOutlineText: { color: "#8b4513", fontWeight: 700, fontSize: 16 },
  appIcon: {
    width: 200,
    height: 300,
    resizeMode: "contain",
    marginTop: 0,
  },
});
