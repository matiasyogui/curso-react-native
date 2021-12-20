import { applyMiddleware, combineReducers, createStore } from "redux";

import { ForumListReducer } from "./reducer/ForumList.reducer";
import { PostsReducer } from "./reducer/Posts.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  forumList: ForumListReducer,
  posts: PostsReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
