import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state /* action */) => {
      state.isLoading(true);

      // Remember that thanks to RTK i can mutate the state. If it were a traditional reducer:
      // I'd have to use spread to avoid mutating the original state
      // startLoadingPokemons: (state /* action */) => {
      //   return {
      //     ...state,
      //     isLoading: true
      //   }
      // },
    },

    setPokemons: (state, action) => {
      console.log(action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, startLoadingPokemons, setPokemons } =
  pokemonSlice.actions;
