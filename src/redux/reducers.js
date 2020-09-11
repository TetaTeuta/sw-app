import { GET_LIST_REQUEST } from "./actions";
import { GET_LIST_SUCESS } from "./actions";
import { GET_LIST_ERROR } from "./actions";

const initialState = {
  loading: false,
  list: [],
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_REQUEST:
      return {
        loading: true
      };

    case GET_LIST_SUCESS:
      return {
        loading: false,
        list: action.payload,
        error: ""
      };

    case GET_LIST_ERROR:
      return {
        loading: false,
        list: [],
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
