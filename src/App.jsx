// @modules
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

// @components
import PokemonList from "./components/PokemonList";
import CreatePokemon from "./components/CreatePokemon";

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
            setPokemons((pokemons) => [
              ...pokemons,
              {
                name: data.name,
                image: data.sprites.front_default,
                types: data.types,
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

  //console.log(pokemons);

  return (
    <div className="App">
      <h1>POKEDEX</h1>
      <Button onClick={handleShow}>Create Pokemon</Button>
      <CreatePokemon show={show} setShow={setShow} setPokemons={setPokemons} />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
