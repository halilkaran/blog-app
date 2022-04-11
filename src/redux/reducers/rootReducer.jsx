import { combineReducers } from "redux";
import newBlogReducer from "../reducers/newBlogReducer";
import userReducer from "./userReducer";
 

const rootReducer = combineReducers({
  blog: newBlogReducer,
  user: userReducer
});

export default rootReducer;
