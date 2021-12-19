import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { ListItem } from "../components/ListItem";
import { ModalApp } from "../components/ModalApp";
import React from "react";
import { useNavigation } from "@react-navigation/core";

export const Posts = () => {
  const navigation = useNavigation();

  let posts = useSelector((state) => state.posts.posts);
  return (
    <View style={styles.container}>
      {/* <ModalApp
        modal={modal}
        setModal={setModal}
        onHandleDelete={onHandleDelete}
        itemSelected={itemSelected}
      />
 */}
      <ListItem posts={posts} />
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
