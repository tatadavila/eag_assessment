// @modules
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// @components
import { CreatePokemon, PokemonList, Search, Loader } from "./components/";

// @styles
import "./App.css";

// @slices
import { fetchPokemonsWithData, setOpenCreatePokemon } from "./slices";

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchPokemonsWithData());
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App">
      <h1>POKEDEX</h1>
      <div className="App__HeaderButtons">
        <Button
          onClick={() => dispatch(setOpenCreatePokemon(true))}
          style={{ marginInline: "0.5rem" }}
        >
          Create Pokemon
        </Button>
        <Search />
      </div>
      <CreatePokemon />
      {loading ? <Loader /> : <PokemonList pokemons={pokemons} />}
    </div>
  );
}

export default App;
