import React from "react";
import PokemonService from "@/services/pokemon";
import PokemonCard from "@/components/PokemonCard";

export default function Home(){

    const [pokemons, setPokemons] = React.useState([]);

    const pokemonService = new PokemonService();
    React.useEffect(() => {
      pokemonService.getAllPokemonsFull()
      .then(res => setPokemons(res));
    }, []);

    return(
        <section>
            {pokemons.length > 1
            ?
            <div className="grid gap-4 md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 place-content-center">
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