import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ListContainer from "./ListContainer";
import { BrowserRouter, Route } from "react-router-dom";

export default class Welcome extends Component {
  render() {
    return (
      <div>
        Welcome to SW app. Click next to continue
        <Link to={`/list`}>
          <Button>Next</Button>
        </Link>
        <Route exact path="/list" render={<ListContainer />}></Route>
      </div>
    );
  }
}
