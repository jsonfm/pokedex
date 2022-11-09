import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { PokemonCard } from "@/components/PokemonCard";
import { Skeleton } from "@/components/Skeleton";


export const PokemonsList = ({ pokemons, fetchPokemons }) => {

    return(
        <>
            <InfiniteScroll
                next={async () => await fetchPokemons(false)}
                dataLength={pokemons.length}
                loader={<Skeleton/>}
                hasMore={true}
            >
                <div className="flex flex-wrap gap-1 justify-center">
                {pokemons?.map(pokemon =>(
                    <PokemonCard data={pokemon}/>
                ))}
                </div>
            </InfiniteScroll>
        </>
    )
}