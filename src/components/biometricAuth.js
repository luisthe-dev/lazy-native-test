import * as LocalAuthentication from "expo-local-authentication";

export default biometricAuth = async () => {
  const canBiometric = await LocalAuthentication.hasHardwareAsync();

  if (!canBiometric) return "no bio";

  const hasBiometric = await LocalAuthentication.isEnrolledAsync();

  if (!hasBiometric) return "empty bio";

  const authBiometric = await LocalAuthentication.authenticateAsync({
    promptMessage: "Get Crazy With Lazy",
    cancelLabel: "Cancel",
    fallbackLabel: "Enter Password",
    disableDeviceFallback: true,
  });

  return authBiometric ? true : false;
};
