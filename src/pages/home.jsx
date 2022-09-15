// React
import React from "react";

// Others
import { useSelector, useDispatch } from "react-redux";

// Services
import PokemonService from "@/services/pokemon";

// Components
import { PokemonsList }from "@/components/PokemonsList";

// Actions
import { setPokemons } from "@/actions";




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
                <input type="search" placeholder="Search..." className="input input-bordered w-full max-w-xs" />
            </div>
            <PokemonsList pokemons={pokemons} />
        </section>
    )
    
}

export default Home;
