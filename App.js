import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import AppLoading from "expo-app-loading";
import { AppNavigator } from "./navigation/AppNavigator";
import { Header } from "./components/Header";
import { NewPost } from "./pages/NewPost";
import { Posts } from "./pages/Posts";
import { useFonts } from "expo-font";

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
  
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
  });

  !loaded && <AppLoading />;
  
/*   <NewPost setInput={setInput} onAdd={onAdd} />;
  

  <Posts
  list={list}
    onHandleModal={onHandleModal}
    modal={modal}
    setModal={setModal}
    onHandleDelete={onHandleDelete}
    itemSelected={itemSelected}
  />;
 */

  return (
    <>
      <AppNavigator 
      setInput={setInput} 
      onAdd={onAdd} 
      list={list}
      onHandleModal={onHandleModal}
      modal={modal}
      setModal={setModal}
      onHandleDelete={onHandleDelete}
      itemSelected={itemSelected} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "90%",
    fontFamily: "Poppins",
  },
});
