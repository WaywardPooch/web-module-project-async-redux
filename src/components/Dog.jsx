// Libraries
import React, { useEffect } from "react";
import { connect } from "react-redux";

// Actions
import { getDogInfo } from "./../actions";

export const Dog = (props) => {
  // Prop destructuring
  const { dogPicture, isFetching, errorMessage, getDogInfo } = props;

  // Event handlers
  const handleChangeDog = () => {
    getDogInfo();
  }

  // If there's an error, show an error message
  if (errorMessage) {
    return (
      <>
        <h1>We're sorry; something messed up!</h1>
        <p>Error Message: {errorMessage}</p>
      </>
    );
  }

  // If data is still being fetched, show a loading message
  if (isFetching) {
    return (
      <>
        <h1>Loading new dog image...</h1>
        <p>Please wait! :-)</p>
      </>
    );
  }

  // If no errors & fetching is complete, show the dog
  return (
    <div>
      <h1>Dog</h1>
      <img src={dogPicture} alt="dog" />
      <button onClick={handleChangeDog}>Get New Dog!</button>
    </div>
  );
};

const mapStateToPRops = (state) => {
  return {
    dogPicture: state.dogPicture,
    isFetching: state.isFetching,
    errorMessage: state.errorMessage,
  };
};

export default connect(mapStateToPRops, { getDogInfo })(Dog);
