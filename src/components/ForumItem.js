import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

import { Colors } from "../constants/Colors";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { auth } from "../firebase/config";
import { deletePost } from "../store/actions/posts.action";
import { onAuthStateChanged } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const win = Dimensions.get("window");

export const ForumItem = ({ post, image, key }) => {
  const [user, setUser] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

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

  const handleDelete = (id) => {
    dispatch(deletePost(id));
    console.log(id);
    setModalVisible(false);
  };

  return (
    <>
      <Modal
        visible={modalVisible}
        transparent
        onRequestClose={() => setModalVisible(false)}
        animationType="fade"
      >
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={style.modal}>
            <Text style={style.textName}>Delete the post?</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                onPress={() => {
                  handleDelete(post.id);
                }}
                style={style.button}
              >
                <Text>YES</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
                style={style.button}
              >
                <Text>NO</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View>
        <View style={style.container}>
          <View style={style.postHeader}>
            <Text style={style.textName}>{post.title}</Text>
            <Text>by: {post.username}</Text>
          </View>
          <Text>{post.description}</Text>
          {image.includes(".jpg") && (
            <Image style={style.image} source={{ uri: image }} />
          )}
          {user.displayName === post.username && (
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}
              style={style.trash}
            >
              <Feather name="trash-2" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    marginVertical: "2%",
    backgroundColor: "#713528",
    padding: "5%",
    borderRadius: 4,
  },
  textName: {
    fontFamily: "PoppinsBold",
    fontSize: 16,
  },
  image: {
    height: win.height * 0.2,
    width: "100%",
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modal: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    width: "40%",
    marginVertical: "10%",
    backgroundColor: Colors.secondary,
    padding: 10,
    borderRadius: 4,
    justifyContent: "space-between",
    alignItems: "center",
  },
  trash: {
    flexDirection: "row-reverse",
    marginTop: "3%",
  },
});
