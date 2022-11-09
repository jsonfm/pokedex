import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonService from '@/services/pokemon';
import { TagList } from "@/components/TagList";

const pokemonService = new PokemonService()

export default function Detail(){
    const [pokemonData, setPokemonData] = React.useState({});
    const { id } = useParams();

    React.useEffect(() => {
        pokemonService.getPokemon(id)
        .then(res => setPokemonData(res));
    }, [])

    
    const { 
        name,
        types,
        weight,
        height,
        base_experience: experience,
        moves 
    } = pokemonData;

    const front_default = pokemonData?.sprites?.front_default;
    const back_default = pokemonData?.sprites?.back_default;
    const back_shiny = pokemonData?.sprites?.back_shiny;
    const front_shiny = pokemonData?.sprites?.front_shiny;
    // const {
    //     back_default    
    // } = pokemonData.sprites;

    console.log("dat: ", pokemonData);
    
    return(
        <section className="py-12 lg:py-24">
            {/* <p className="uppercase mb-6 md:mb-12 lg:mb-24 text-xl text-center">Pokemon Detail</p> */}
            <div className="container flex flex-col md:flex-row">
                <div className="w-full flex items-center justify-center mb-4 gap-2">
                <div className="flex flex-col mb-4">
                    <div className="flex justify-center shadow-md">
                        <img
                            src={front_default}
                            className="w-48 h-48 object-cover"
                        />
                    </div>
                    <div className="flex mt-4">
                        <img
                            src={back_default}
                            className="w-28 h-32object-cover shadow "
                        />
                        <img
                            src={front_shiny}
                            className="w-28 h-32 object-cover shadow"
                        />
                        <img
                            src={back_shiny}
                            className="w-28 h-32 object-cover shadow"
                        />
                    </div>
                    <button className="bg-rose-600 text-white px-3 py-2 w-1/2 mt-4 hover:bg-white hover:text-rose-600 hover:border hover:border-rose-600 mx-auto linear duration-200">Catch</button>
                </div>
                </div>
                <div className="w-full flex flex-col mb-4 min-h-[250px] md:px-4 lg:px-12">
                    <p className="font-bold text-base mb-4 uppercase text-gray-500 text-center">General Info</p>
                    <div className="flex gap-4 my-2">
                        <p className="font-bold w-1/3">Name</p>
                        <p className="w-2/3">{name}</p>
                    </div>
                    <div className="flex gap-4 my-2">
                        <p className="font-bold w-1/3">Type</p>
                        <div className="flex flex-wrap gap-3 w-2/3">
                            <TagList tags={types}/>
                        </div>
                    </div>
                    <div className="flex gap-4 my-2">
                        <p className="font-bold w-1/3">Weight</p>
                        <p className="w-2/3">{weight}</p>
                    </div>
                    <div className="flex gap-4 my-2">
                        <p className="font-bold w-1/3">Height</p>
                        <p className="w-2/3">{height}</p>
                    </div>
                    <div className="flex gap-4 my-2">
                        <p className="font-bold w-1/3">Experience</p>
                        <p className="w-2/3">{experience}</p>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3 min-h-[250px] max-h-[300px] lg:px-12">
                    <p className="font-bold text-base mb-4 uppercase text-gray-500 text-center">Moves</p>
                    <div className="flex flex-col gap-3 overflow-y-auto">
                    {!!moves 
                    ? <>
                        {moves.map((move, index) => (
                            <div className="capitalize" key={`move-${index}`}>{move.move.name}</div>
                        ))}
                        </>
                    : <p>Loading</p> 
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}