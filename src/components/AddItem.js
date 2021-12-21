import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

import { Colors } from "../constants/Colors";
import { ImageSelector } from "./ImageSelector";
import { Picker } from "@react-native-picker/picker";
import { newPost } from "../store/actions/posts.action";
import { selectForum } from "../store/actions/forums.action";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";

export const AddItem = () => {
  const [selectedForum, setSelectedForum] = useState("1");

  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

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

      <ImageSelector
        inputTitle={inputTitle}
        inputDescription={inputDescription}
        selectedForum={selectedForum}
        setInputTitle={setInputTitle}
        setInputDescription={setInputTitle}
        setSelectedForum={setSelectedForum}
        onImage={(image) => console.log(image)}
      />
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
