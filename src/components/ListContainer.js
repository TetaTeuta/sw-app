import React from "react";
import { connect } from "react-redux";
import { getList } from "../redux/actions";

function ListContainer(props) {
  return (
    <div>
      <h1>Number {props.list}</h1>
      <button onClick={props.getList}>Minus one</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getList: () => dispatch(getList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
