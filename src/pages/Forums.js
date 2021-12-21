import { FlatList, Text, View } from "react-native";
import React, { useEffect } from "react";
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

  return (
    <View>{forumMap()}</View>
    /*     <FlatList
      data={postsFiltered}
      keyExtractor={(item) => item.id}
      renderItem={renderForumItem}
    /> */
  );
};
