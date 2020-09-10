import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import getListRequest from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  getListRequest,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

console.log(store.getState());

export default store;
