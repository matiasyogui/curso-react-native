import { FILTERED_POSTS, NEW_POST } from "../actions/posts.action";

import { POSTS } from "../../data/posts";

const initialState = {
  posts: POSTS,
  filteredPosts: [],
  selected: null,
};

export const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERED_POSTS:
      console.log(action.forumID);
      return {
        ...state,
        filteredPosts: state.posts.filter(
          (post) => post.forum == action.forumID
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

    default:
      return state;
  }
};
