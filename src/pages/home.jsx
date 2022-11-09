// React
import React from "react";

// Others
import { useSelector, useDispatch } from "react-redux";

// Services
import {pokemonService} from "@/services/pokemon";

// Components
import { PokemonsList } from "../components/PokemonsList";

// Actions
import { setPokemons, appendPokemons, setPokemonFilter } from "@/actions";


function Home(){
    // let filtered = [];
    const pokemons = useSelector(state => state.pokemons);
    const dispatch = useDispatch();

    const fetchPokemons = async (first=true) => {
        const response = await pokemonService.getAllPokemonsFull();

        if(first){
            dispatch(setPokemons(response.results));
        }else{   
            const values = await pokemonService.getPokemonsFromURL(response.next)
            dispatch(appendPokemons(values.results));
        }   
        // filtered = [...pokemons];
    }

    React.useEffect(() => {
        fetchPokemons();
    }, []);


    const filter = (e) => {
        const search = e.target.value;
        dispatch(setPokemonFilter(search));
        // filtered = pokemons.find(pokemon => pokemon.toLowerCase().includes(search.toLowerCase()));
    }


    return(
        <section>
            <div className="mx-auto max-w-[600px] my-12 text-center">
                <input onChange={filter} type="search" placeholder="Search..." className="outline-none h-12 border px-4 min-w-[300px]" />
            </div>

            <PokemonsList pokemons={pokemons} fetchPokemons={fetchPokemons}/>
        </section>
    )
    
}

export default Home;
