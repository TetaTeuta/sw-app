import React, { Component } from "react";
import "../styles/ItemCard.scss";
import ItemDetails from "./ItemDetails";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Route } from "react-router-dom";

export default class SingleView extends Component {
  handleClick() {
    return <ItemDetails />;
  }

  render() {
    const { item } = this.props; //item represents single user object
    return (
      <div className="card__container">
        <h3> {item.name}</h3>
        <p>Height: {item.height}</p>
        <p>Mass: {item.mass}</p>
        <Link to={`/item`}>
          <Button>Next</Button>
        </Link>
        <Route exact path="/item" render={<ItemDetails />}></Route>
      </div>
    );
  }
}
