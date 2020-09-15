import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Route } from "react-router-dom";

export default class ItemDetails extends Component {
  render() {
    const { item } = this.props;
    console.log(item);

    return (
      <div>
        <p>component</p>
        {/* <p>{item.name}</p>
        <p>Height: {item.height}</p>
        <p>Mass: {item.mass}</p>
        <p>Hair color: {item.hair_color}</p>
        <p>Skin color: {item.skin_color}</p> */}

        <Link to={`/list`}>
          <Button>Back</Button>
        </Link>
        <Route exact path="/list">
          {" "}
        </Route>
      </div>
    );
  }
}
