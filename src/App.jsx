// @modules
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";

// @components
import CreatePokemon from "./components/CreatePokemon";
import PokemonList from "./components/PokemonList";
import Search from "./components/Search";

// @styles
import "./App.css";

// @actions
import { setPokemons as setPokemonsAction } from "./actions";

// @api
import { getPokemons } from "./api/getPokemons";

function App({ loader, pokemons, setPokemons }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    try {
      const fetchPokemons = async () => {
        const response = await getPokemons();
        const promises = response.map(async (elem) => {
          const { data } = await axios.get(elem.url);
          let typeArr = data.types?.map((t) => t.type.name);

          return {
            name: data.name,
            image: data.sprites.front_default,
            types: typeArr,
            weight: data.weight,
          };
        });
        const pokemonsArr = await Promise.all(promises);

        setPokemons(pokemonsArr);
      };

      fetchPokemons();
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log({ loader });

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

const mapStateToPorps = (state) => ({
  pokemons: state.pokemons,
});
const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsAction(value)),
});

export default connect(mapStateToPorps, mapDispatchToProps)(App);
