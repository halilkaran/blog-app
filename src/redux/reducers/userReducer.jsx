import {   SET_CURRENT_USER } from "../types/userTypes";

const initialState = {
  // userList: [],
    currentUser: "",
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case SET_USER_LIST:
    //   return { ...state, userList: payload };
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
export default userReducer;
