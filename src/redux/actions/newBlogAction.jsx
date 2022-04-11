import {
  SET_NEW_BLOG,
  SET_UPDATE_BLOG,
  SET_CLEAR_BLOG
} from "../types/blogTypes";

export const setNewBlogAction = (payload) => {
  
  return { type: SET_NEW_BLOG, payload: payload };
};

export const setUpdateBlogAction = (payload) => {
  return { type: SET_UPDATE_BLOG, payload: payload };
};

export const setClearBlogAction = (payload) => {
  return { type: SET_CLEAR_BLOG, payload: payload };
};