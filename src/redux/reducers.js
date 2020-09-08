import { GET_LIST } from "./actions";

const initialState = {
  list: 10
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        list: state.list - 1
      };
    default:
      return state;
  }
};

export default listReducer;
