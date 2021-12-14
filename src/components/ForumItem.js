import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

export const ForumItem = ({ post }) => {
  return (
    <View>
      <View style={{ marginLeft: "5%", marginVertical: "2%" }}>
        <Text style={style.textName}>{post.title}</Text>
        <Text>{post.description}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#d3d3d3",
    width: 360,
    height: 80,
    marginVertical: 15,
  },
  textName: {
    fontFamily: "PoppinsBold",
    fontSize: 16,
  },
});
