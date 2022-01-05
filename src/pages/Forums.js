import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { filteredPosts, getPosts } from "../store/actions/posts.action";
import { useDispatch, useSelector } from "react-redux";

import { ForumItem } from "../components/ForumItem";
import { TabRouter } from "@react-navigation/routers";
import { posts } from "../data/posts";

export const Forums = ({ route }) => {
  const dispatch = useDispatch();
  const postsFiltered = useSelector((state) => state.posts.filteredPosts);
  const forum = useSelector((state) => state.forumList.selected);
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(filteredPosts(forum.id, posts));
  }, [posts]);

  const forumMap = () => {
    return postsFiltered.map((value) => {
      return <ForumItem post={value} image={value.image} key={value.id} />;
    });
  };

  return <View style={styles.container}>{forumMap()}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "95%",
    alignSelf: "center",
    fontFamily: "Poppins",
  },
});
