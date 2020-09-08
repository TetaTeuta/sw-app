import React from "react";
import "./App.css";
import ListContainer from "./components/ListContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ListContainer />
      </div>
    </Provider>
  );
}

export default App;
