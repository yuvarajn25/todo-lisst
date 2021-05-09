import { combineReducers } from "redux";
import notification from "./notification";
import todo from "./todo";

export default combineReducers({ todo, notification });
