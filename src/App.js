import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Welcome from "./components/Welcome";
import { BrowserRouter, Route } from "react-router-dom";
import ListContainer from "./components/ListContainer";
import ItemDetails from "./components/ItemDetails";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Welcome} />
          <Route path="/list" component={ListContainer} />
          <Route path="/item" component={ItemDetails} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
