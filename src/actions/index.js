// Libraries
import axios from "axios";

// Constants
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

// Simple actions
export const startFetch = () => {
  return { type: FETCH_START };
};

export const updateDogInfo = (newDog) => {
  return { type: FETCH_SUCCESS, payload: newDog };
};

export const displayError = (error) => {
  return { type: FETCH_FAILURE, payload: error };
};

// Complex actions
export const getDogInfo = () => {
  return (dispatch) => {
    dispatch(startFetch());
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        console.log("DOG INFO REQUEST", response.data.message);
        dispatch(updateDogInfo(response.data.message));
      })
      .catch((error) => {
        dispatch(displayError(toString(error)));
      });
  };
};
