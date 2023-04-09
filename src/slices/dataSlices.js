// @modules
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// @api
import { getPokemons, getPokemonsData } from "../api";

// @slices
import { setLoading } from "./";

const initialState = {
  pokemons: [],
};

export const fetchPokemonsWithData = createAsyncThunk(
  "data/fetchPokemonsWithData",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));

    const pokemonsResponse = await getPokemons();
    const pokemonsData = await Promise.all(
      pokemonsResponse.map((pokemon) => getPokemonsData(pokemon)),
    );
    const pokemonsArr = pokemonsData.map((data) => {
      let typeArr = data.types?.map((t) => t.type.name);
      return {
        name: data.name,
        id: data.id,
        image: data.sprites.front_default,
        types: typeArr,
        weight: data.weight,
      };
    });

    dispatch(setPokemons(pokemonsArr));
    dispatch(setLoading(false));
  },
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
  },
});

export const { setPokemons } = dataSlice.actions;

export default dataSlice.reducer;
