import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchApi } from "../redux/actions";
import ItemCard from "./ItemCard";
import "../styles/ListContainer.scss";
import { BrowserRouter as Route } from "react-router-dom";
import ItemDetails from "./ItemDetails";

function ListContainer({ listData, fetchApi }) {
  console.log(listData);
  //list data is destructured from props
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="card__grid--container">
      <div>
        <Route
          exact
          path="/"
          render={() =>
            listData.map((m) => <ItemCard key={m.name} movie={m} />)
          }
        />
        <Route path="/movies/" />
        {listData.list.map((item) => (
          <div className="card__grid--item">
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  //state from Redux store is mapped to props
  return {
    listData: state
  };
};

const mapDispatchToProps = (dispatch) => {
  //maps dispatch of action creator as a prop of a component
  return {
    fetchApi: () => dispatch(fetchApi())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer); //connects react component to Redux store
