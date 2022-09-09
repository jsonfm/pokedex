import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonService from '@/services/pokemon';


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

    const image = pokemonData?.sprites?.front_default;

    console.log(types);
    
    return(
        <section className="py-12">
            <p className="uppercase mb-6 md:mb-12 text-xl text-center">Pokemon Detail</p>
            <div className="container flex flex-col md:flex-row">
                <div className="w-full flex items-center justify-center mb-4">
                    <img
                        src={image}
                        className="h-48"
                    />
                </div>
                <div className="w-full flex flex-col mb-4 min-h-[250px]">
                    <p className="font-bold text-xl mb-4">General Info</p>
                    <div className="flex gap-4 my-2">
                        <p className="font-bold w-1/3">Name</p>
                        <p className="w-2/3">{name}</p>
                    </div>
                    <div className="flex gap-4 my-2">
                        <p className="font-bold w-1/3">Type</p>
                        <div className="flex flex-wrap gap-3 w-2/3">
                            {!!types &&
                            <>
                            {types.map((tag, index) => (
                                <div className="bg-rose-600 px-2 py-1 text-white rounded-full">{tag.type.name}</div>
                            ))}
                            </>
                            }
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
                <div className="w-full flex flex-col gap-3 min-h-[250px] max-h-[300px] overflow-y-auto">
                    <p className="font-bold text-xl mb-4">Moves</p>
                    {!!moves 
                    ? <>
                        {moves.map((move, index) => (
                            <div className="capitalize">{move.move.name}</div>
                        ))}
                        </>
                    : <p>Loading</p> 
                    }
                </div>
            </div>
        </section>
    )
}