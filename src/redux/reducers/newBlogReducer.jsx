 
import { SET_NEW_BLOG, SET_UPDATE_BLOG } from "../types/blogTypes";

const initialState = {
  blogs: []
};

const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NEW_BLOG:
      return { blogs:[ payload] };
    case SET_UPDATE_BLOG:
      return { blogs: [payload] };
    default:
      return state;
  }
};
export default blogReducer;
