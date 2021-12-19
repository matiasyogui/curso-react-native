import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

import { Picker } from "@react-native-picker/picker";
import { newPost } from "../store/actions/posts.action";
import { useDispatch } from "react-redux";

export const AddItem = () => {
  const [selectedForum, setSelectedForum] = useState("1");

  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [id, setId] = useState(8);

  const dispatch = useDispatch();

  const onAdd = () => {
    setId(id + 1);
    console.log("additem " + id, inputTitle, inputDescription, selectedForum);
    dispatch(newPost(id, inputTitle, inputDescription, selectedForum));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Post title"
        style={styles.input}
        onChangeText={(text) => setInputTitle(text)}
      />
      <TextInput
        placeholder="Post description"
        style={styles.input}
        onChangeText={(text) => setInputDescription(text)}
      />
      <Picker
        style={styles.picker}
        selectedValue={selectedForum}
        onValueChange={(itemValue, itemIndex) => setSelectedForum(itemValue)}
      >
        <Picker.Item label="javascript" value="1" />
        <Picker.Item label="react" value="2" />
        <Picker.Item label="react-native" value="3" />
        <Picker.Item label="java" value="4" />
      </Picker>
      <Button title="AGREGAR" onPress={onAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 5,
    width: "60%",
  },
  picker: {
    width: "50%",
  },
});
