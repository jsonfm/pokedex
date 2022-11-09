import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { PokemonCard } from "@/components/PokemonCard";
import { Skeleton } from "@/components/Skeleton";


export const PokemonsList = ({ pokemons, fetchPokemons, hasMore=true, filter }) => {

    return(
        <>
            <InfiniteScroll
                next={fetchPokemons}
                dataLength={pokemons.length}
                loader={<Skeleton/>}
                hasMore={hasMore}
            >
                <div className="flex flex-wrap gap-4 justify-center">
                {pokemons?.map(pokemon =>(
                    <PokemonCard data={pokemon} key={pokemon.name}/>
                ))}

                
                </div>
            </InfiniteScroll>
            {!pokemons.length && <p className="text-red-500 text-lg text-center">No Results for <b>{filter}</b>.</p>}
        </>
    )
}