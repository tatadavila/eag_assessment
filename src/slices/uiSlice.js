import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  showSearchInput: false,
  openCreatePokemon: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setOpenCreatePokemon: (state, action) => {
      state.openCreatePokemon = action.payload;
    },
    setShowSearchInput: (state, action) => {
      state.showSearchInput = action.payload;
    },
  },
});

export const { setLoading, setOpenCreatePokemon, setShowSearchInput } =
  uiSlice.actions;

export default uiSlice.reducer;
