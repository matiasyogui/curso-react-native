import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Dimensions } from "react-native";
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

  const handleDelete = () => {
    //dispatch(deletePost(key));
  };

  return (
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
          <Button title="Delete" onPress={handleDelete} />
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginBottom: "2%",
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
});
