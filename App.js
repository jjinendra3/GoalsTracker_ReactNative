import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ShowGoal from "./components/ShowGoal";
import InputGoal from "./components/InputGoal";
export default function App() {
  const [arr, setarr] = useState([]);
  return (
    <View style={styles.container}>
      <InputGoal arr={arr} setarr={setarr} />
      <ShowGoal arr={arr} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
});
