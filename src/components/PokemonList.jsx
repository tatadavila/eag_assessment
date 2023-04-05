// @components
import Pokemon from "./Pokemon";

// @styles
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList__container">
      {pokemons
        ? pokemons.map((pokemon, key) => {
            return <Pokemon key={key} pokemon={pokemon} />;
          })
        : null}
    </div>
  );
};

export default PokemonList;
