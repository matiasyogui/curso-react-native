import { combineReducers, createStore } from "redux";

import { ForumListReducer } from "./reducer/ForumList.reducer";
import { PostsReducer } from "./reducer/Posts.reducer";

const RootReducer = combineReducers({
  forumList: ForumListReducer,
  posts: PostsReducer,
});

export default createStore(RootReducer);
