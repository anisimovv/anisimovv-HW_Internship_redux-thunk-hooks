import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { addFormReducer } from "./addFormReducer";
import { notificationReducer } from "./notificationReducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  formData: addFormReducer,
  notification: notificationReducer,
});
