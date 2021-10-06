// Action constants
import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "./../actions";

const initialState = {
  dogPicture: "https://www.dogvills.com/wp-content/uploads/2019/11/funny-boy-dog-names-f.jpg",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        dogPicture: "",
        isFetching: true,
        errorMessage: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        dogPicture: action.payload,
        isFetching: false,
        errorMessage: "",
      };
    case FETCH_FAILURE:
      return {
        ...state,
        dogPicture: "",
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};