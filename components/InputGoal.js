import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Modal } from "react-native";

const InputGoal = (props) => {
  const [str, setstr] = useState("");

  const { arr, setarr, modaler, setmodaler } = props;
  return (
    <>
      <Modal visible={modaler} animationType="slide">
        <View style={styles.inputContainer}>
          <Image
            source={require("../goal.png")}
            style={{
              height: 100,
              width: 100,
              marginBottom: 30,
            }}
          />
          <TextInput
            placeholder="TODO today"
            style={styles.InputArea}
            value={str}
            onChangeText={setstr}
          ></TextInput>
          <View style={styles.btns}>
            <View style={styles.btn}>
              <Button
                color="#FFA41B"
                title="Add Goal!"
                onPress={() => {
                  if (str.length !== 0) {
                    let ar = [...arr];
                    ar.push(str);
                    setstr("");
                    setarr(ar);
                  } else {
                    Alert.alert("Error", "Enter Some Values to Add Goals.");
                  }
                  setmodaler(false);
                }}
              />
            </View>
            <View style={styles.btn}>
              <Button
                color="#FFA41B"
                title="Close"
                onPress={() => {
                  setmodaler(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default InputGoal;
const styles = StyleSheet.create({
  InputArea: {
    borderWidth: 1,
    borderColor: "#ECCDB4",
    borderStyle: "solid",
    width: "90%",
    backgroundColor: "#ECCDB4",
    borderRadius: 6,
  },
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F86F03",
  },
  btns: {
    flexDirection: "row",
    marginTop: 25,
  },
  btn: {
    marginHorizontal: 20,
  },
});
