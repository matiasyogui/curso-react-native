import { FlatList, Text, View } from "react-native";

import { ForumItem } from "../components/ForumItem";
import React from "react";
import { TabRouter } from "@react-navigation/routers";
import { posts } from "../data/posts";

export const Forums = ({ route }) => {
  const postsFiltered = posts.filter((post) => {
    return post.forum === route.params.name;
  });

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
