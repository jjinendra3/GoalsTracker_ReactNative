import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import ShowGoal from "./components/ShowGoal";
import InputGoal from "./components/InputGoal";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [arr, setarr] = useState([]);
  const [modal_visiblity, setmodal_visiblity] = useState(false);
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Button
          title="Add A GOAL!"
          color="#F45050"
          onPress={() => {
            setmodal_visiblity(true);
          }}
        />
        <InputGoal
          arr={arr}
          setarr={setarr}
          modaler={modal_visiblity}
          setmodaler={setmodal_visiblity}
        />
        <ShowGoal arr={arr} setarr={setarr} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#F9D949",
  },
});
