import {
  FILTERED_POSTS,
  GET_POSTS,
  NEW_POST,
  getPosts,
} from "../actions/posts.action";

import { POSTS } from "../../data/posts";

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
      const newItem = {
        id: action.id,
        title: action.title,
        description: action.description,
        forum: action.forumID,
      };
      return {
        ...state,
        posts: [...state.posts, newItem],
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};
