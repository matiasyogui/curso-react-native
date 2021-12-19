export const FILTERED_POSTS = "FILTERED_POSTS";
export const NEW_POST = "NEW_POST";

export const filteredPosts = (id) => ({
  type: FILTERED_POSTS,
  forumID: id,
});

export const newPost = (newID, title, description, forumID) => ({
  type: NEW_POST,
  id: newID,
  title: title,
  description: description,
  forumID: forumID,
});
