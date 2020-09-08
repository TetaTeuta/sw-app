import { createStore } from "redux";
import listReducer from "./reducers";

const store = createStore(listReducer);

console.log(store.getState());

export default store;
