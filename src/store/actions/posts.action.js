import * as FileSystem from "expo-file-system";

import { URL_API } from "../../constants/Database";

export const FILTERED_POSTS = "FILTERED_POSTS";
export const NEW_POST = "NEW_POST";
export const GET_POSTS = "GET_POSTS";

export const newPost = (newID, title, description, forumID, image) => {
  return async (dispatch) => {
    try {
      const fileName = image.split("/").pop();
      const Path = FileSystem.documentDirectory + fileName;

      try {
        FileSystem.moveAsync({
          from: image,
          to: Path,
        });
      } catch (error) {
        console.log(error.message);
        throw error;
      }

      const response = await fetch(`${URL_API}posts.json`, {
        method: "POST",
        headers: {
          "CONTENT-TYPE": "application/json",
        },
        body: JSON.stringify({
          type: NEW_POST,
          id: newID,
          title: title,
          description: description,
          forumID: forumID,
          image: Path,
        }),
      });

      const result = await response.json();
      console.log(result);

      dispatch({
        type: NEW_POST,
        id: newID,
        title: title,
        description: description,
        forumID: forumID,
        image: Path,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/posts.json`, {
        headers: {
          "Content-type": "application/json",
        },
      });

      const result = await response.json();
      const posts = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));

      dispatch({
        type: GET_POSTS,
        payload: posts,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filteredPosts = (id, posts) => ({
  type: FILTERED_POSTS,
  forumID: id,
  posts: posts,
});
