import { actionTypes } from "@/actions/types";

const initialState = {
    pokemons: [],
    filter: "",
    filtered: [],
    page: 1,
}

export const pokemonsReducer = (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {

        case actionTypes.SET_POKEMONS:
            return {...state, pokemons: payload}

        case actionTypes.APPEND_POKEMONS:
            return {...state, pokemons: [...state.pokemons, ...payload]}

        case actionTypes.SET_POKEMON_FILTER:
            const filtered = state.pokemons.filter(({name}) => name.toLowerCase().includes(payload.toLowerCase()))
            return {
                ...state, 
                filtered,
                filter: payload
            }

        case actionTypes.SET_FILTERED:
            return {...state, filtered: payload}

        case actionTypes.SET_PAGE:
            return {...state, page: payload }

        default:
            return state;
    }
}