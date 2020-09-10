import axios from "axios";

export const GET_LIST_REQUEST = "GET_LIST_REQUEST";
export const GET_LIST_SUCESS = "GET_LIST_SUCESS";
export const GET_LIST_ERROR = "GET_LIST_ERROR";

export const fetchApi = () => {
  return (dispatch) => {
    dispatch(getListRequest);
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        const people = response.results;
        dispatch(getListSucess(people)); //here we dispatch getList action which stores list from reducers
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getListError(errorMsg));
      });
  };
};

export const getListRequest = () => {
  return {
    type: GET_LIST_REQUEST
  };
};

export const getListSucess = (people) => {
  return {
    type: GET_LIST_SUCESS,
    payload: people
  };
};

export const getListError = (error) => {
  return {
    type: GET_LIST_ERROR,
    payload: error
  };
};
