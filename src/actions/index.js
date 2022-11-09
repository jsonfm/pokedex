import { actionTypes } from "./types";


export const setPokemons = (payload) => ({
    type: actionTypes.SET_POKEMONS,
    payload,
});


export const appendPokemons = (payload) => ({
    type: actionTypes.APPEND_POKEMONS,
    payload,
});


export const setPokemonFilter = (payload) => ({
    type: actionTypes.SET_POKEMON_FILTER,
    payload,
});


export const setFiltered = (payload) => ({
    type: actionTypes.SET_FILTERED,
    payload,
});


export const setPage = (payload) => ({
    type: actionTypes.SET_PAGE,
    payload,
})


