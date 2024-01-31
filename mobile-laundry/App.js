import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Heading6 from "./components/Text";

const Hello = ({ judul1, judul2 }) => {
  return (
    <>
      <Text style={styles.head4}>{judul1}</Text>
      <Text style={styles.head5}>{judul2}</Text>
      <Text style={styles.head6}>Tes</Text>
    </>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={{ marginTop: 30 }}>
      <Text onPress={() => setCounter(counter + 1)}>Count {counter}</Text>
      <Hello judul1={"Hello World"} judul2={"Hello World 2"}/>
      <Heading6 />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  textHeading1: {
    fontSize: 60,
    color: "#000088"
  },
  head6: {
    fontSize: 8
  },
  head5: {
    fontSize: 16
  },
  head4: {
    fontSize: 24
  }

  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
