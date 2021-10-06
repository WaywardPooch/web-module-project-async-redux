// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
// State management
import { reducer } from './reducers';
// Components
import App from "./App";

// Create redux store
const store = createStore(reducer, applyMiddleware(logger, thunk));

// Render the app
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
