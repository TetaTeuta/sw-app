import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

console.log(store.getState());

export default store;
