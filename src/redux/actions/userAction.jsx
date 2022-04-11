import {  SET_CURRENT_USER } from "../types/userTypes";

export const setLoginAction = (payload) => {
    console.log(payload);
  return { type: SET_CURRENT_USER, payload: payload };
};

export const setLogoutAction = () => {
  return { type: SET_CURRENT_USER, payload: "" };
};
