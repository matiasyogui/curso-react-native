import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { ListItem } from "../components/ListItem";
import { getPosts } from "../store/actions/posts.action";
import { useNavigation } from "@react-navigation/core";

export const Posts = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [posts]);

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
    height: "95%",
    alignSelf: "center",
    fontFamily: "Poppins",
  },
});
