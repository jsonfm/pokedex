import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { pokemonService } from '@/services/pokemon';
import { TagList } from "@/components/TagList";
import { UilPrevious } from '@iconscout/react-unicons';


export default function Detail(){
    const navigate = useNavigate();
    const [pokemonData, setPokemonData] = React.useState({});
    const { id } = useParams();

    const fetchPokemonData = async () => {
        const response = await pokemonService.getPokemon(id);
        setPokemonData(response);
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
        fetchPokemonData();
    }, [])

    
    if(!pokemonData.sprites)
        return null

    const { 
        name,
        types,
        weight,
        height,
        base_experience: experience,
        moves 
    } = pokemonData;

    const {
        front_default,
        back_default,
        back_shiny,
        front_shiny
    } = pokemonData.sprites;

    
    return(
        <section className="">
            <div className="mt-12 mb-24 cursor-pointer " onClick={() => navigate("/")}>
                <UilPrevious className="scale-[1.8] hover:scale-[2] duration-100"/>
            </div>
            <div className="container flex flex-col md:flex-row">
                <div className="w-full flex items-center justify-center mb-4 gap-2">
                <div className="flex flex-col mb-4">
                    <div className="flex justify-center shadow-md rounded-md">
                        <img
                            src={front_default}
                            className="w-48 h-48 object-cover"
                        />
                    </div>
                    <div className="flex mt-4">
                        <img
                            src={back_default}
                            className="w-28 h-32object-cover shadow rounded-md"
                        />
                        <img
                            src={front_shiny}
                            className="w-28 h-32 object-cover shadow rounded-md"
                        />
                        <img
                            src={back_shiny}
                            className="w-28 h-32 object-cover shadow rounded-md"
                        />
                    </div>
                    <button className="bg-rose-600 text-white px-3 py-2 w-1/2 mt-4 hover:bg-white hover:text-rose-600 hover:border hover:border-rose-600 mx-auto linear duration-200 rounded-md">Catch</button>
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