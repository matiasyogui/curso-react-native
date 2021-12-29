import {
  DELETE_POST,
  FILTERED_POSTS,
  GET_POSTS,
  NEW_POST,
} from "../actions/posts.action";

import { Post } from "../../models/post";

const initialState = {
  posts: [], //POSTS,
  filteredPosts: [],
  selected: null,
};

export const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERED_POSTS:
      console.log(action.posts);
      console.log(action.forumID);
      return {
        ...state,
        filteredPosts: action.posts.filter(
          (post) => post.forumID == action.forumID
        ),
      };
    case NEW_POST:
      const newPost = new Post(
        action.id,
        action.title,
        action.description,
        action.forumID,
        action.image
      );
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.id),
      };

    default:
      return state;
  }
};
