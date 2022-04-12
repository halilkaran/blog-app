import { combineReducers } from "redux";
import newBlogReducer from "../reducers/newBlogReducer";
import dashboardReducer from "../reducers/dashboardReducer";
import userReducer from "./userReducer";
 

const rootReducer = combineReducers({
  blog: newBlogReducer,
  user: userReducer,
  dashboards: dashboardReducer
});

export default rootReducer;
