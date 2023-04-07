// @modules
import { Container } from "react-bootstrap";

// @components
import Pokemon from "./Pokemon";

// @styles
import "./PokemonList.css";
import GridSystem from "./Layouts/GridSystem";

const PokemonList = ({ pokemons }) => {
  return (
    <Container className="PokemonList__container">
      <GridSystem colCount={3} md={4}>
        {pokemons.length > 0
          ? pokemons.map((pokemon) => {
              return <Pokemon key={pokemon.name} pokemon={pokemon} />;
            })
          : [<p>No tracks are found.</p>]}
      </GridSystem>
    </Container>
  );
};

export default PokemonList;
