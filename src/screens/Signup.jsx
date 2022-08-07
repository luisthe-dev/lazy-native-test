import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import React, { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import biometricAuth from "../components/biometricAuth";

WebBrowser.maybeCompleteAuthSession();

const { height } = Dimensions.get("window");

const screenheight = parseInt(height);

const Signup = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "333518274106-roi75id8suuqa4dqbc3n53mkg5udv6lo.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
    }
  }, [response]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.signUpContainer}>
        <StatusBar barStyle="dark-content" backgroundColor={"#ffffff"} />
        <View style={styles.signUpForm}>
          <Text style={styles.signUpText}>Crazy Lazy</Text>
          <Text style={styles.signUpHeaderText}>Create A New Account</Text>
          <Text style={styles.signUpSubText}>
            And Be A Part Of The Crazy Fun
          </Text>
          <TextInput
            keyboardType="default"
            placeholder="Full Name"
            style={styles.textInput}
          />
          <TextInput
            keyboardType="email-address"
            placeholder="Email Address"
            style={styles.textInput}
          />
          <TextInput
            keyboardType="visible-password"
            placeholder="Password"
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpExtras}>
          <TouchableOpacity
            style={styles.signUpExtrasButton}
            onPress={() => {
              promptAsync();
            }}
          >
            <AntDesign name="google" size={28} color="black" />
            <Text style={styles.signUpExtrasButtonText}>
              Sign Up With Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signUpExtrasButton}
            onPress={() => {
              promptAsync();
            }}
          >
            <FontAwesome5 name="facebook" size={28} color="black" />
            <Text style={styles.signUpExtrasButtonText}>
              Sign Up With Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signUpExtrasButton}
            onPress={() => {
              promptAsync();
            }}
          >
            <AntDesign name="apple1" size={28} color="black" />
            <Text style={styles.signUpExtrasButtonText}>
              Sign Up With Apple
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Signup;

const styles = StyleSheet.create({
  signUpContainer: {
    minHeight: screenheight,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpForm: {
    flex: 2,
    width: "90%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: 20,
  },
  signUpText: {
    fontSize: 50,
    fontFamily: "Poppins_700Bold_Italic",
    color: "#000",
    marginBottom: 20,
    alignSelf: "center",
  },
  signUpHeaderText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 28,
    color: "#025686",
    marginBottom: 0,
  },
  signUpSubText: {
    fontFamily: "RobotoCondensed_300Light",
    fontSize: 16,
    color: "#025686",
    marginBottom: 20,
  },
  signUpExtras: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "#fafafa",
    borderColor: "#025686",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    fontFamily: "RobotoCondensed_300Light",
    fontSize: 14,
    color: "#025686",
  },
  signUpButton: {
    width: "100%",
    paddingVertical: 14,
    backgroundColor: "#025686",
    borderColor: "#025686",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpButtonText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#fff",
  },
  signUpExtrasButton: {
    width: "90%",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderColor: "#025686",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 4,
  },
  signUpExtrasButtonText: {
    fontFamily: "RobotoCondensed_700Bold",
    fontSize: 16,
    color: "#025686",
    marginLeft: 10,
  },
});
