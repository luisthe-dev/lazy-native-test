import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const Onboarding = () => {
  return (
    <>
      <View style={styles.onboardingContainer}>
        <LottieView
          autoPlay={true}
          style={{
            width: "90%",
            backgroundColor: "#ffffff",
          }}
          source={require("../../assets/lotties/onboarding.json")}
        />
        <StatusBar barStyle="dark-content" backgroundColor={"#ffffff"} />
        <Text style={styles.onboardingText}>Crazy With Luis</Text>
      </View>
      <View style={styles.onboardingBtnContainer}>
        <TouchableOpacity style={styles.onboardingBtn}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 18,
              color: "#ffffff",
              alignSelf: "center",
            }}
          >
            Create An Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            padding: 10,
          }}
        >
          <Text
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Poppins_400Regular",
              fontSize: 14,
            }}
          >
            Already Have An Account?
            <Text style={{ color: "#025686" }}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  onboardingContainer: {
    flex: 4,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  onboardingText: {
    fontFamily: "RobotoCondensed_300Light_Italic",
    fontSize: 32,
    color: "#025686",
    marginTop: "10%",
  },
  onboardingBtnContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  onboardingBtn: {
    backgroundColor: "#025686",
    padding: 12,
    paddingTop: 16,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
});
