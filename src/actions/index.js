// @types
import { SET_LOADER, SET_POKEMONS } from "./types";

export const setLoader = (payload) => ({
  type: SET_LOADER,
  payload,
});

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});
