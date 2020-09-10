import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchApi } from "../redux/actions";

function ListContainer({ list, fetchApi }) {
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <h2>People List</h2>
      <div>
        {list && list.people && list.people.map((user) => <p>{user.name}</p>)}
      </div>
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
    fetchApi: () => dispatch(fetchApi())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer); //connects react component to Redux store
