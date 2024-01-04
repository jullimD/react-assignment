import { createStore, combineReducers, applyMiddleware } from "redux";
import rootReducer from "../reducers/users";
import { thunk } from "redux-thunk";



const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
