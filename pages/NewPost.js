import { AddItem } from "../components/AddItem";
import React from "react";
import { View } from "react-native";

export const NewPost = ({ setInput, onAdd }) => {
  return (
    <View>
      <AddItem setInput={setInput} onAdd={onAdd} />
    </View>
  );
};
