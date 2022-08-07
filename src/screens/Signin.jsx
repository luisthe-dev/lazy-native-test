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

const Signin = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "333518274106-roi75id8suuqa4dqbc3n53mkg5udv6lo.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
    }
  }, [response]);

  useEffect(() => {
    initiateBiometric();
  }, [initiateBiometric]);

  const initiateBiometric = async () => {
    const biometricReply = await biometricAuth();
    console.log(biometricReply);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.SigninContainer}>
        <StatusBar barStyle="dark-content" backgroundColor={"#ffffff"} />
        <View style={styles.SigninForm}>
          <Text style={styles.SigninText}>Crazy Lazy</Text>
          <Text style={styles.SigninHeaderText}>Sign In</Text>
          <Text style={styles.SigninSubText}>And Let's Get Crazy!!!</Text>
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
          <TouchableOpacity style={styles.SigninButton}>
            <Text style={styles.SigninButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.SigninExtras}>
          <TouchableOpacity
            style={styles.SigninExtrasButton}
            onPress={() => {
              promptAsync();
            }}
          >
            <AntDesign name="google" size={28} color="black" />
            <Text style={styles.SigninExtrasButtonText}>
              Sign In With Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.SigninExtrasButton}
            onPress={() => {
              promptAsync();
            }}
          >
            <FontAwesome5 name="facebook" size={28} color="black" />
            <Text style={styles.SigninExtrasButtonText}>
              Sign In With Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.SigninExtrasButton}
            onPress={() => {
              promptAsync();
            }}
          >
            <AntDesign name="apple1" size={28} color="black" />
            <Text style={styles.SigninExtrasButtonText}>
              Sign In With Apple
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Signin;

const styles = StyleSheet.create({
  SigninContainer: {
    minHeight: screenheight,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  SigninForm: {
    flex: 2,
    width: "90%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: 20,
  },
  SigninText: {
    fontSize: 50,
    fontFamily: "Poppins_700Bold_Italic",
    color: "#000",
    marginBottom: 20,
    alignSelf: "center",
  },
  SigninHeaderText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 28,
    color: "#025686",
    marginBottom: 0,
  },
  SigninSubText: {
    fontFamily: "RobotoCondensed_300Light",
    fontSize: 16,
    color: "#025686",
    marginBottom: 20,
  },
  SigninExtras: {
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
  SigninButton: {
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
  SigninButtonText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#fff",
  },
  SigninExtrasButton: {
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
  SigninExtrasButtonText: {
    fontFamily: "RobotoCondensed_700Bold",
    fontSize: 16,
    color: "#025686",
    marginLeft: 10,
  },
});
