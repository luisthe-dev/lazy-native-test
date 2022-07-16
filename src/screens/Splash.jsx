import { StatusBar, Text, View } from "react-native";
import React from "react";

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("Onboarding");
  }, 5000);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#025686",
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={"#025686"} />
      <Text
        style={{
          fontFamily: "RobotoCondensed_700Bold",
          fontSize: 32,
          color: "#fafafa",
        }}
      >
        Crazy Luis
      </Text>
    </View>
  );
};

export default Splash;
