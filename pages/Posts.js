import { ListItem } from "../components/ListItem";
import { ModalApp } from "../components/ModalApp";
import React from "react";
import { View } from "react-native";

export const Posts = ({
  list,
  onHandleModal,
  modal,
  setModal,
  onHandleDelete,
  itemSelected,
}) => {
  return (
    <View>
      <ModalApp
        modal={modal}
        setModal={setModal}
        onHandleDelete={onHandleDelete}
        itemSelected={itemSelected}
      />
      <ListItem list={list} onHandleModal={onHandleModal} />
    </View>
  );
};
