import { StyleSheet, Text, View, Pressable } from "react-native";
import BatTextInput from "./BatTextInput";
import { useEffect, useState } from "react";
import generatePass from "../services/passwordService";
import * as Clipboard from "expo-clipboard";

const BatButton = () => {
  const [pass, setPass] = useState<string>("");
  const [copyText, setCopyText] = useState<string>("📋 COPY");

  function handleGenerateButton() {
    let generateToken = generatePass();
    setPass(generateToken);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
    setCopyText("✅ COPIED!");
    setTimeout(() => {
      setCopyText("📋 COPY");
    }, 4000);
  }

  useEffect(() => {
    handleGenerateButton();
  }, []);

  return (
    <>
      <BatTextInput pass={pass} />

      <Pressable style={styles.button} onPress={handleGenerateButton}>
        <Text style={styles.text}>🚀 GENERATE</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleCopyButton}>
        <Text style={styles.text}>{copyText}</Text>
      </Pressable>
    </>
  );
};

export default BatButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 5,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    paddingVertical: 12,
    backgroundColor: "black",
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#E5BF3C",
  },
});
