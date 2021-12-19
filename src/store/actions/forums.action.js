export const SELECT_FORUM = "SELECT_FORUM";

export const selectForum = (id) => ({
  type: SELECT_FORUM,
  forumID: id,
});
