// React
import React from "react";

// Others
import { useSelector, useDispatch } from "react-redux";

// Services
import { pokemonService } from "@/services/pokemon";

// Components
import { PokemonsList } from "../components/PokemonsList";

// Actions
import { setPokemons, appendPokemons, setPokemonFilter, setPage } from "@/actions";


function Home(){

    const { pokemons, filtered, filter, page } = useSelector(state => state);

    const dispatch = useDispatch();

    const fetchPokemons = async (first=true) => {
        const response = await pokemonService.getPaginatedPokemons(first ? 1 : page);
        const { results } = response;
        first ? dispatch(setPokemons(results)) : dispatch(appendPokemons(results));
        dispatch(setPage(page + 1));
        console.log("page:: ", page);
    }

    React.useEffect(() => {
        fetchPokemons();
    }, []);


    const applyfilter = (e) => {
        const search = e.target.value;
        dispatch(setPokemonFilter(search));
    }

    const list = filter.length > 0 ? filtered : pokemons;

    return(
        <section>
            <div className="mx-auto max-w-[600px] my-12 text-center">
                <input onChange={applyfilter} type="search" placeholder="Search..." className="outline-none h-12 border px-4 min-w-[300px]" />
            </div>

            <PokemonsList 
                pokemons={list} 
                fetchPokemons={fetchPokemons} 
                hasMore={true} 
            />
        </section>
    )
    
}

export default Home;
