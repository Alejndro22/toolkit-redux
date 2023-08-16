import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // TODO: make http request
    const req = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`
    );
    const { results } = await req.json();

    dispatch(setPokemons({ pokemons: results, page: page + 1 }));
  };
};
