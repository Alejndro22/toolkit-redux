import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';
import { Loader } from './components/Loader';
import { ListGrid } from './components/ListGrid';

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />

      {/* loader if isLoading is true */}
      {isLoading ? <Loader /> : <ListGrid results={pokemons} />}

      {/* if isLoading, button disabled */}
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
