import { Button, FlatList, StyleSheet, Text, View } from "react-native";

import React from "react";

export const ListItem = ({ list, onHandleModal }) => {
  return (
    <>
      <Text>POSTS: </Text>
      <View style={styles.container}>
        {list.length > 0 ? (
          <FlatList
            data={list}
            renderItem={(data) => (
              <View style={styles.container} key={data.item.value}>
                <Text style={styles.texto}>{data.item.value}</Text>
                <Button
                  title="X"
                  onPress={() => onHandleModal(data.item)}
                ></Button>
              </View>
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
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  texto: {
    fontSize: 20,
    color: "black",
    marginBottom: 20,
  },
});
