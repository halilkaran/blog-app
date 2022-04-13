import { SET_UPDATE_BLOG } from "../types/blogTypes";

export const setUpdateBlogAction = (payload) => {
  return { type: SET_UPDATE_BLOG, payload: payload };
};
