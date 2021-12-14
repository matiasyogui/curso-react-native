import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

export const GridItem = ({ item, onSelected }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => onSelected(item)}
        style={styles.container}
      >
        <View style={[{ backgroundColor: item.color }, styles.gridItem]}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius: 6,
    margin: 15,
    height: 160,
    width: 160,
    justifyContent: "flex-end",
    alignItems: "flex-end",
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
