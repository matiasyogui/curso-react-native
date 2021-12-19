import { FlatList, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ForumItem } from "../components/ForumItem";
import { TabRouter } from "@react-navigation/routers";
import { filteredPosts } from "../store/actions/posts.action";
import { posts } from "../data/posts";

export const Forums = ({ route }) => {
  const dispatch = useDispatch();
  const postsFiltered = useSelector((state) => state.posts.filteredPosts);
  const forum = useSelector((state) => state.forumList.selected);

  useEffect(() => {
    dispatch(filteredPosts(forum.id));
  }, []);

  const forumMap = () => {
    return postsFiltered.map((value) => {
      return <ForumItem post={value} key={value.id} />;
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
