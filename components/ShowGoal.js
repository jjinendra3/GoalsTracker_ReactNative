import { Pressable, View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const ShowGoal = (props) => {
  const { arr, setarr } = props;
  const deleter = (id) => {
    let ar = [];
    for (let i = 0; i < arr.length; i++) {
      if (id != i) {
        ar.push(arr[i]);
      }
    }
    setarr(ar);
  };
  return (
    <View style={styles.goalsarea}>
      <Text style={styles.title}>Your List of Goals todo today are:</Text>
      <FlatList
        data={arr}
        renderItem={(element) => {
          return (
            <View style={styles.elements}>
            <Pressable
            android_ripple={{color:'black'}}
              key={element.index}
              onPress={deleter.bind(this, element.index)}
            >
                <Text>{element.item}</Text>
            </Pressable>
              </View>
          );
        }}
      />
    </View>
  );
};

export default ShowGoal;
const styles = StyleSheet.create({
  elements: {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    padding: 10,
    margin: 5,
    textAlign: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 16,
    marginBottom: 16,
  },
  goalsarea: {
    flex: 9,
    paddingTop: 15,
  },
});
