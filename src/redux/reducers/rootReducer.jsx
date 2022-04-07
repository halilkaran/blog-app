import { combineReducers } from "redux";
import newBlogReducer from "../reducers/newBlogReducer";
 

const rootReducer = combineReducers({
  app: newBlogReducer
});

export default rootReducer;
