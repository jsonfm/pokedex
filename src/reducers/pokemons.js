import { actionTypes } from "@/actions/types";

const initialState = {
    pokemons: [],
    filter: "",
}

export const pokemonsReducer = (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {

        case actionTypes.SET_POKEMONS:
            return {...state, pokemons: payload}

        case actionTypes.APPEND_POKEMONS:
            return {...state, pokemons: state.pokemons.concat(payload)}

        case actionTypes.SET_POKEMON_FILTER:
            return {...state, filter: payload}

        default:
            return state;
    }
}