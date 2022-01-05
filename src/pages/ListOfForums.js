import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { GridItem } from "../components/GridItem";
import React from "react";
import { forums } from "../data/forums";
import { selectForum } from "../store/actions/forums.action";
import { useNavigation } from "@react-navigation/core";

export const ListOfForums = () => {
  const navigation = useNavigation();
  const forums = useSelector((state) => state.forumList.forums);
  const dispatch = useDispatch();

  const handlerSelectedCategory = (item) => {
    dispatch(selectForum(item.id));
    navigation.navigate("Forums", {
      name: item.name,
    });
  };

  return (
    <View>
      <FlatList
        numColumns={2}
        data={forums}
        renderItem={({ item }) => {
          return (
            <GridItem
              item={item}
              onSelected={() => handlerSelectedCategory(item)}
            />
          );
        }}
      />
    </View>
  );
};
