import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";

const InputGoal = (props) => {
  const [str, setstr] = useState("");

  const { arr, setarr } = props;
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="TODO today"
          style={styles.InputArea}
          value={str}
          onChangeText={setstr}
        ></TextInput>
        <Button
          title="Add Goal!"
          onPress={() => {
            if(str.length!==0){
              let ar = [...arr];
            ar.push(str);
            setstr("");
            setarr(ar);
            }else{
              Alert.alert('Error','Enter Some Values to Add Goals.');
            }
            
          }}
        ></Button>
      </View>
    </>
  );
};

export default InputGoal;
const styles = StyleSheet.create({
  InputArea: {
    borderWidth: 1,
    borderColor: "black",
    border: "solid",
    width: "70%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    flex: 1,
  },
});
