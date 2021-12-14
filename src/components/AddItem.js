import { Button, StyleSheet, TextInput, View } from "react-native";

import React from "react";

export const AddItem = ({ setInput, onAdd }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Escribe un nuevo post!"
        style={styles.input}
        onChangeText={(text) => setInput(text)}
      />
      <Button title="AGREGAR" onPress={onAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: "20%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 5,
    width: "60%",
  },
});
