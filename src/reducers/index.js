import { combineReducers } from "redux";
import currentUserReducer from "./currentUser";
import authReducer from "./auth";
import questionReducer from './questions'
import usersReducer from './users'



export default combineReducers({ authReducer, currentUserReducer, questionReducer, usersReducer })