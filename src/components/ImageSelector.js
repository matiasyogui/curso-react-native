import * as ImagePicker from "expo-image-picker";

import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { Colors } from "../constants/Colors";
import { auth } from "../firebase/config";
import { newPost } from "../store/actions/posts.action";
import { onAuthStateChanged } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";

export const ImageSelector = ({
  inputTitle,
  inputDescription,
  selectedForum,
  onImage,
}) => {
  const [pickedURI, setPickedURI] = useState("");
  const [id, setId] = useState(8);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.id;
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.getCameraPermissionsAsync();

    if (status !== "granted") {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") Alert.alert("Permisos insuficientes.");
      return false;
    }

    return true;
  };

  const handlerTakeImage = async () => {
    const camaraOK = await verifyPermissions();

    if (!camaraOK) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    setPickedURI(image.uri);
    onImage(image.uri);
  };

  const handleLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    if (!result.cancelled) {
      setPickedURI(result.uri);
    }
  };

  const onAdd = () => {
    setId(id + 1);
    console.log(
      "additem " + id,
      inputTitle,
      inputDescription,
      selectedForum,
      pickedURI,
      user.displayName
    );
    dispatch(
      newPost(
        id,
        inputTitle,
        inputDescription,
        selectedForum,
        pickedURI,
        user.displayName
      )
    );
    navigation.navigate("Posts");
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.preview}>
          {!pickedURI ? (
            <Text>Sin imagen seleccionada</Text>
          ) : (
            <Image source={{ uri: pickedURI }} style={styles.image} />
          )}
        </View>
        <View style={styles.botones}>
          <Button
            title="Tomar foto"
            color={Colors.primary}
            onPress={handlerTakeImage}
            style={{ marginRight: 10 }}
          />
          <Button
            title="Elegir foto"
            color={Colors.primary}
            onPress={handleLibrary}
            style={{ marginRight: 10 }}
          />
          <Button
            title="Borrar foto"
            color={Colors.primary}
            onPress={() => {
              setPickedURI("");
            }}
          />
        </View>
      </View>

      <Button title="AGREGAR" onPress={onAdd} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  preview: {
    width: "100%",
    height: "70%",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.secondary,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  botones: {
    flexDirection: "row",
  },
});
