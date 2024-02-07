/**
 * store
 */
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import countReducer from "./count_reducer";
import { thunk } from "redux-thunk"; // 用来处理异步action的返回值

export default createStore(countReducer, applyMiddleware(thunk));
