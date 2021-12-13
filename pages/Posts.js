import { Button, StyleSheet, Text, View } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { Header } from "../components/Header";
import { ListItem } from "../components/ListItem";
import { ModalApp } from "../components/ModalApp";
import React from "react";
import { useNavigation } from "@react-navigation/core";

export const Posts = ({
  list,
  onHandleModal,
  modal,
  setModal,
  onHandleDelete,
  itemSelected,
}) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <ModalApp
        modal={modal}
        setModal={setModal}
        onHandleDelete={onHandleDelete}
        itemSelected={itemSelected}
      />
      <ListItem list={list} onHandleModal={onHandleModal} />
 */}  
      <Text>Todavia no hay items.</Text>
      <Button title="Todos los foros" onPress={() => {navigation.navigate('Forums')}} />
      <Button title="+" style={styles.boton} onPress={() => {navigation.navigate('NewPost')}} />

    </View>
  );
};

const styles = StyleSheet.create({
  boton:{
    backgroundColor: Colors.secondary,
  },
  container: {
    width: "90%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf:"center"
  }
});