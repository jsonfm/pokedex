import React from "react";
import PokemonService from "@/services/pokemon";
import PokemonCard from "@/components/PokemonCard";
import { setPokemons } from "@/actions";

import { useSelector, useDispatch } from "react-redux";


function Home(){
    const pokemons = useSelector(state => state.pokemons);
    const dispatch = useDispatch();

    const pokemonService = new PokemonService();
    React.useEffect(() => {
        const fetchPokemons = async () => {
            const response = await pokemonService.getAllPokemonsFull();
            dispatch(setPokemons(response));
        }
        fetchPokemons();
    }, []);

    return(
        <section>

            <div className="mx-auto max-w-[600px] my-12 text-center">
                <input type="search" placeholder="Search..." className="input w-full max-w-xs border-b-2" />
            </div>

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
        </section>
    )
    
}

export default Home;
