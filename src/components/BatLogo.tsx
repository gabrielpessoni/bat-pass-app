import { StyleSheet } from "react-native";
import { Text, Image } from "react-native";

const BatLogo = () => {
  return (
    <>
      <Text style={styles.title}>BAT PASS GENERATOR</Text>
      <Image
        style={styles.image}
        source={require("../../assets/bat-logo.png")}
      />
    </>
  );
};

export default BatLogo;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "#E5BF3C",
  },
  image: {
    resizeMode: "contain",
    height: 180,
  },
});
