import { Button, StyleSheet, Text, View } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { Header } from "../components/Header";
import { ListItem } from "../components/ListItem";
import { ModalApp } from "../components/ModalApp";
import React from "react";
import { posts } from "../data/posts";
import { useNavigation } from "@react-navigation/core";

export const Posts = ({
  list,
  onHandleModal,
  modal,
  setModal,
  onHandleDelete,
  itemSelected,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <ModalApp
        modal={modal}
        setModal={setModal}
        onHandleDelete={onHandleDelete}
        itemSelected={itemSelected}
      />
 */}
      <ListItem list={posts} />
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    backgroundColor: Colors.secondary,
  },
  container: {
    width: "90%",
    height: "100%",
    alignItems: "center",
    alignSelf: "center",
    fontFamily: "Poppins",
  },
});
