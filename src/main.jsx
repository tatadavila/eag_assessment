// @modules
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// @source
import App from "./App";

// @styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// @store
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
