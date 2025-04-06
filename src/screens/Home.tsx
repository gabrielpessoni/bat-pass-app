import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BatLogo from "../components/BatLogo";
import BatTextInput from "../components/BatTextInput";

const Home = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>

      <View style={styles.inputContainer}>
        <BatTextInput />
      </View>

      <StatusBar style="light" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    flexDirection: "column",
    borderColor: "#fff",
    borderWidth: 2,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#4D4D4D",
  },
  inputContainer: {
    width: "80%",
    flexDirection: "column",
    alignItems: "center",
  },
});
