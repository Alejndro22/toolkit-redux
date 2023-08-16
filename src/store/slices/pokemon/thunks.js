import { pokemonApi } from '../../../api/pokemonAPI';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // TODO: make http request
    // !async req with FETCH
    // const req = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`
    // );
    // const { results } = await req.json();

    // !async requ with AXIOS
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page}`);
    console.log(data);

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
