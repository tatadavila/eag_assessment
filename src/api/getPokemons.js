import axios from "axios";

export const getPokemons = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50")
    .then((res) => {
      return res.data.results.map((pokemon) => {
        return { name: pokemon.name, url: pokemon.url };
      });
    })
    .catch((err) => console.log(err));
};
