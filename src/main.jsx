// @modules
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

// @source
import App from "./App";

// @styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// @reducers
import { pokemonsReducer } from "./reducers/pokemons";

const store = createStore(pokemonsReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
