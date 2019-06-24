import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./app";
import reducers from "./app/scenes/application/scenes/projects/reducers";
import { createStore } from "redux";

render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
