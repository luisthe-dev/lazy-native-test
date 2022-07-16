import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import {
  RobotoCondensed_300Light,
  RobotoCondensed_300Light_Italic,
  RobotoCondensed_400Regular,
  RobotoCondensed_400Regular_Italic,
  RobotoCondensed_700Bold,
  RobotoCondensed_700Bold_Italic,
} from "@expo-google-fonts/roboto-condensed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "./src/screens/LoadingScreen";
import Onboarding from "./src/screens/Onboarding";
import Signin from "./src/screens/Signin";
import Signup from "./src/screens/Signup";
import Splash from "./src/screens/Splash";

export default function App() {
  let [loadFonts] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
    RobotoCondensed_300Light,
    RobotoCondensed_300Light_Italic,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular_Italic,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold_Italic,
  });

  const AuthContainer = createNativeStackNavigator();
  if (!loadFonts) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <AuthContainer.Navigator screenOptions={{ headerShown: false }}>
        <AuthContainer.Screen name="Splash" component={Splash} />
        <AuthContainer.Screen name="Login" component={Signin} />
        <AuthContainer.Screen name="Signup" component={Signup} />
        <AuthContainer.Screen name="Onboarding" component={Onboarding} />
      </AuthContainer.Navigator>
    </NavigationContainer>
  );
}
