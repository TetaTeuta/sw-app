import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ListContainer from "./ListContainer";
import { BrowserRouter as Route } from "react-router-dom";

export default class ItemDetails extends Component {
  render() {
    const { item } = this.props;

    return (
      <div>
        ItemDetails
        <Link to={`/list`}>
          <Button>Back</Button>
        </Link>
        <Route exact path="/list" render={<ListContainer />}></Route>
      </div>
    );
  }
}
