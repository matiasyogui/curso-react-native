import { FORUMS } from "../../data/forums";
import { SELECT_FORUM } from "../actions/forums.action";

const initialState = {
  forums: FORUMS,
  selected: null,
};

export const ForumListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FORUM:
      const indexForum = state.forums.findIndex(
        (forum) => forum.id === action.forumID
      );
      if (indexForum === -1) return state;
      return { ...state, selected: state.forums[indexForum] };

    default:
      return state;
  }
};
