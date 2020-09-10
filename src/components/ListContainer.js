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
  //state from Redux store is mapped to props
  return {
    list: state.list
  };
};

const mapDispatchToProps = (dispatch) => {
  //maps dispatch of action creator as a prop of a component
  return {
    getList: () => dispatch(getList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer); //connects react component to Redux store
