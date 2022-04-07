import { useId } from "react";
import { SET_NEW_BLOG, SET_UPDATE_BLOG } from "../types/blogTypes";

const initialState =
{blogs:[{
  id: " ",
  img: " ",
  title: " ",
  date: " ",
  text: " ",
  email: " "
}]}

const blogReducer = (state = initialState, { type, payload }) => {
  
  switch (type) {
    case SET_NEW_BLOG:
      return [
        ...state.blogs,
       { id: payload.id,
        img: payload.img,
        title: payload.title,
        date: payload.date,
         text: payload.text,
       email: payload.email
       }
      ];
    case SET_UPDATE_BLOG:
      return { ...state, selectedUser: payload };
    default:
      return state;
  }
};
export default blogReducer;
