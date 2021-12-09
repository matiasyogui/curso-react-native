import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";

export default function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [itemSelected, setItemSelected] = useState(null);
  const [modal, setModal] = useState(false);

  const onAdd = () => {
    setList([
      ...list,
      { id: Math.floor(Math.random() * 1000) + 1, value: input },
    ]);
  };

  const onHandleModal = (item) => {
    setItemSelected(item);
    setModal(true);
  };

  const onHandleDelete = () => {
    setList([
      list.filter((item) => {
        item.id != itemSelected.id;
      }),
    ]);
    setModal(false);
  };

  return (
    <>
      <Modal
        visible={modal}
        transparent
        onRequestClose={() => setModal(false)}
        animationType="fade"
      >
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ width: "50%", height: "25%" }}>
            <Text>Eliminar el item?</Text>
            <View>
              <Button
                onPress={() => {
                  onHandleDelete();
                }}
                title="SI"
              />
              <Button
                onPress={() => {
                  setModal(false);
                }}
                title="NO"
              />
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.container}>
        <TextInput
          placeholder="Escribe aqui!"
          style={styles.input}
          onChangeText={(text) => setInput(text)}
        />
        <Button title="AGREGAR" onPress={onAdd} />
      </View>
      <View style={styles.container}>
        {list.length > 0 ? (
          <FlatList
            data={list}
            renderItem={(data) => (
              <View style={styles.container}>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 5,
    width: "60%",
  },
  texto: {
    fontSize: 20,
    color: "black",
    marginBottom: 20,
  },
});
