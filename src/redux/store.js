import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import listReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  listReducer,
  composeWithDevTools(applyMiddleware(logger))
);

console.log(store.getState());

export default store;
