import { combineReducers } from "redux";
import { pokemonsReducer } from "./pokemons";

export default combineReducers({
  pokemonsReducer,
  counter,
});
