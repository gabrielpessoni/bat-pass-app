import { StyleSheet, TextInput } from "react-native";

interface BatTextInputProps {
  pass: string;
}

const BatTextInput = (props: BatTextInputProps) => {
  return (
    <TextInput
      style={styles.inputer}
      placeholder="pass"
      multiline
      value={props.pass}
      readOnly
    />
  );
};

export default BatTextInput;

const styles = StyleSheet.create({
  inputer: {
    width: "100%",
    backgroundColor: "#E5BF3C",
    color: "black",
    fontSize: 20,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlign: "center",
  },
});
