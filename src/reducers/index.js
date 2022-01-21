import { combineReducers } from "redux";

import adminReducer from "./admin";
import blogReducer from "./blog";
import userReducer from "./user";
import { loginUser } from "./reducers";

export default combineReducers({
  admin: adminReducer,
  blog: blogReducer,
  user: userReducer,
  userDerails: loginUser,
});
