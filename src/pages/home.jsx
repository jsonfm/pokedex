// React
import React from "react";

// Others
import { useSelector, useDispatch } from "react-redux";

// Services
import { pokemonService } from "@/services/pokemon";

// Components
import { PokemonsList } from "@/components/PokemonsList";
import { SearchBar } from "@/components/SearchBar";

// Actions
import { setPokemons, appendPokemons, setPage } from "@/actions";

import { PokedexIcon } from "@/icons/PokedexIcon";


function Home(){

    const { pokemons, filtered, filter, page } = useSelector(state => state);
    const dispatch = useDispatch();

    const fetchPokemons = async () => {
        const { results }= await pokemonService.getPaginatedPokemons(page);
        page === 1 ? dispatch(setPokemons(results)) : dispatch(appendPokemons(results));
        dispatch(setPage(page + 1));
    }

    React.useEffect(() => {
        fetchPokemons();
    }, []);

    const list = filter.length > 0 ? filtered : pokemons;

    return(
        <section>
            <PokedexIcon height="120px" className="mx-auto"/>
            <SearchBar />
            <PokemonsList 
                filter={filter}
                pokemons={list} 
                fetchPokemons={fetchPokemons} 
                hasMore={filter.length < 1} 
            />
            {/* <Skeleton /> */}
        </section>
    )
    
}

export default Home;
