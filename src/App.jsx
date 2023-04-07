// @modules
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

// @components
import CreatePokemon from "./components/CreatePokemon";
import PokemonList from "./components/PokemonList";
import Search from "./components/Search";

// @styles
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    try {
      const getPokemonsUrl = async () => {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50`,
        );
        response.data.results.forEach((elem) => {
          const getPokemonData = async () => {
            const { data } = await axios.get(elem.url);

            let typeArr = data.types?.map((t) => t.type.name);

            setPokemons((pokemons) => [
              ...pokemons,
              {
                name: data.name,
                image: data.sprites.front_default,
                types: typeArr,
                weight: data.weight,
              },
            ]);
          };
          getPokemonData();
        });
      };
      getPokemonsUrl();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App">
      <h1>POKEDEX</h1>
      <div className="App__HeaderButtons">
        <Button onClick={handleShow} style={{ marginInline: "0.5rem" }}>
          Create Pokemon
        </Button>
        <Search setPokemons={setPokemons} pokemons={pokemons} />
      </div>
      <CreatePokemon
        show={show}
        setShow={setShow}
        pokemons={pokemons}
        setPokemons={setPokemons}
      />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
