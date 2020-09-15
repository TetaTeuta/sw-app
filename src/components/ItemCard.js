import React, { Component } from "react";
import "../styles/ItemCard.scss";
import ItemDetails from "./ItemDetails";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Route } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default class ItemCard extends Component {
  render() {
    const { item } = this.props; //item represents single user object
    const notify = () => {
      toast("Whoop whoop!");
    };
    return (
      <div className="card__container">
        <h3> {item.name}</h3>
        <p>Height: {item.height}</p>
        <p>Mass: {item.mass}</p>
        <Link to={`/item`}>
          <Button>More info</Button>
        </Link>
        <Route
          exact
          path="/item"
          render={() => <ItemDetails item={item} />}
        ></Route>
        <Button onClick={notify}>Trigger Toast</Button>

        {/* <ItemDetails item={item} /> */}
      </div>
    );
  }
}
