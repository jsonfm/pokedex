import React from "react";

import { PokemonCard } from "@/components/PokemonCard";


export const PokemonsList = (props) => {
    const pokemons = props.pokemons || [];

    return(
        <>
        {pokemons.length > 1
            ?
            <div className="grid gap-4 md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center py-4">
                {pokemons.map((pokemon, index) => (
                    <PokemonCard data={pokemon} id={pokemon.id} key={`pokemon-${index}`}/>
                ))}
            </div>
            :
            <p>Loading</p>
        }
        </>
    )
}