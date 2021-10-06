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
    try {
      const dogInfo = axios.get("https://dog.ceo/api/breeds/image/random");
      dispatch(updateDogInfo(dogInfo.data));
    } catch (error) {
      dispatch(displayError(error));
    }
  };
};
