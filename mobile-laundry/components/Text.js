import { StyleSheet, Text } from "react-native";

const Heading6 = () => {
  return <Text style={styles.heading6}>Heading 6</Text>;
};

const Heading5 = () => {
  return <Text>Heading 5</Text>;
};

export default { Heading6, Heading5 };

const styles = StyleSheet.create({
  heading6: {
    color: "black",
    fontSize: 24,
    fontWeight: "400",
  },
  heading5: {
    color: "blue",
    fontSize: 32,
  },
});
