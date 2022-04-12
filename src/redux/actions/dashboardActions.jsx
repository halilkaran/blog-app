import { READ_BLOG } from "../types/dashboardTypes";

export const readBlogAction = (payload) => {
  return { type: READ_BLOG, payload: payload };
};
