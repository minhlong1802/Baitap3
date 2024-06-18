import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Flex = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: "#F7F9F2" }]}>
        <Text style={styles.boxText}>Square 1</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "#E8C5E5" }]}>
        <Text style={styles.boxText}>Square 2</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "#F19ED2" }]}>
        <Text style={styles.boxText}>Square 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    color: "black",
  },
});

export default Flex;