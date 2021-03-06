import { Button, FlatList, StyleSheet, Text, View } from "react-native";

import { ForumItem } from "./ForumItem";
import React from "react";
import { useSelector } from "react-redux";

export const ListItem = ({ posts }) => {
  return (
    <>
      <View style={styles.container}>
        {posts.length > 0 ? (
          <FlatList
            data={posts}
            renderItem={(data) => (
              <ForumItem
                post={data.item}
                image={data.item.image}
                key={data.item.key}
              />
            )}
            keyExtractor={(item) => item.id}
          ></FlatList>
        ) : (
          <Text>Todavia no hay items.</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  texto: {
    fontSize: 20,
    color: "black",
    marginBottom: 20,
  },
});
