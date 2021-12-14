import { StyleSheet, Text, View } from "react-native";

import React from "react";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Reddit Clone</Text>
      <Text>Nombre de usuario</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "10%",
    fontFamily: "PoppinsBold",
  },
});
