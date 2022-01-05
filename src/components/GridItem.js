import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

export const GridItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)} style={styles.container}>
      <View style={[{ backgroundColor: item.color }, styles.gridItem]}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius: 6,
    margin: "5%",
    height: "30%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    borderRadius: 6,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 3,
    padding: 8,
  },
  title: {
    fontFamily: "PoppinsBold",
  },
});
