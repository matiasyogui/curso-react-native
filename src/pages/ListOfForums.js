import { FlatList, Text, View } from "react-native";

import { GridItem } from "../components/GridItem";
import React from "react";
import { forums } from "../data/forums";
import { useNavigation } from "@react-navigation/core";

export const ListOfForums = () => {
  const navigation = useNavigation();

  const handlerSelectedCategory = (item) => {
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
