import { Button, Modal, Text, View } from "react-native";

import React from "react";

export const ModalApp = ({ modal, setModal, onHandleDelete, itemSelected }) => {
  return (
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
          heigth: "100%",
          width: "100%",
        }}
      >
        <View style={{ width: "50%", height: "25%" }}>
          <Text>Eliminar el item?</Text>
          <View>
            <Button
              onPress={() => {
                onHandleDelete(itemSelected.id);
              }}
              title="SI"
              color="red"
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
  );
};
