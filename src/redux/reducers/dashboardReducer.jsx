import { READ_BLOG } from "../types/dashboardTypes";

const initialState = {
  dashboards: ""
};

const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case READ_BLOG:
      return { blogs:  payload };
     
    default:
      return state;
  }
};
export default blogReducer;
