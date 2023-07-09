import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";

const ShowGoal = (props) => {
  const { arr } = props;
  return (
    <View style={styles.goalsarea}>
      <Text style={styles.title}>Your List of Goals todo today are:</Text>
      <FlatList
        data={arr.reverse()}
        renderItem={(element) => {
          return (
            <TouchableOpacity>
              <View style={styles.elements}>
                <Text>{element.item}</Text>
              </View>
            </TouchableOpacity>
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
