import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  ImageBackground,
} from "react-native";
import onboarding from "../assets/onbording1.jpg";
const OnbaordingScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Plan your trip with TriTo</Text> */}
      <ImageBackground source={onboarding} style={styles.image}>
        <Text style={styles.text}>Plan your trip with TripTo</Text>
      </ImageBackground>
      <Button title="Log in with Google " style={styles.loginButton} />
      <Button title="Sign up with Google" style={styles.SignUpButton} />
    </View>
  );
};
export default OnbaordingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    // justifyContent: "center",
    // width: 50,
    // height: 50,
    // aspectRatio: 1.5,
    resizeMode: "cover",

    // position: "relative",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    top: 90,
    // backgroundColor: "#000000c0",
    // transform: [{ translateY: 50 }, { translateX: -50 }],
  },
  loginButton: {
    flex: 1,
    top: 200,
    position: "absolute",
    top: "70%",
    left: "50%",
  },
  SignUpButton: {
    flex: 1,
    top: 250,
    position: "absolute",
    top: "70%",
    left: "50%",
  },
});
