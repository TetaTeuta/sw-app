import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

console.log(store.getState());

export default store;
