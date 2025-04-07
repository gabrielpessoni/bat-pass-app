import { StyleSheet, Text, View, Pressable } from "react-native";
import BatTextInput from "./BatTextInput";
import { useState } from "react";

const BatButton = () => {
  const [pass, setPass] = useState<string>("");

  function handleGenerateButton() {
    setPass("ola");
  }

  return (
    <>
      <BatTextInput pass={pass} />

      <Pressable style={styles.button} onPress={handleGenerateButton}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => {
          console.log("clicked");
        }}
      >
        <Text style={styles.text}>COPY</Text>
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
