import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { AddItem } from "./components/AddItem";
import { ListItem } from "./components/ListItem";
import { ModalApp } from "./components/ModalApp";

export default function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [itemSelected, setItemSelected] = useState(null);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(0);

  const onAdd = () => {
    setId(id + 1);
    setList([...list, { id: id, value: input }]);
    console.log(id);
  };

  const onHandleModal = (item) => {
    setItemSelected(item);
    setModal(true);
  };

  const onHandleDelete = (idItemSelected) => {
    setList(list.filter((item) => item.id != idItemSelected));
    setModal(false);
  };

  return (
    <View style={styles.container}>
      <ModalApp
        modal={modal}
        setModal={setModal}
        onHandleDelete={onHandleDelete}
        itemSelected={itemSelected}
      />
      <AddItem setInput={setInput} onAdd={onAdd} />
      <ListItem list={list} onHandleModal={onHandleModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
