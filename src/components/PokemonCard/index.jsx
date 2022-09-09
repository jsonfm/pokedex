import React from 'react';
import { Link } from "react-router-dom";


const PokemonCard = ({data}) => {
    console.log("data: ", data);
    const {front_default: image} = data.sprites;
    const {
        name,
        height,
        base_experience: experience,
        weight,
        types
    } = data;
    return(
        <div className="shadow-md w-72 min-h-[250px] p-4 grid place-content-center">
           <img
            src={image}
            className="w-48"
           />
           <p className="font-bold text-center text-xl capitalize mb-2">{name}</p>
           <div className="flex gap-3 mb-4">
                <div className="flex flex-col items-center">
                    <p className="text-gray-600 font-bold">Height</p>
                    <p>{height}</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-gray-600 font-bold">Weight</p>
                    <p>{weight}</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-gray-600 font-bold">Experience</p>
                    <p>{experience}</p>
                </div>
           </div>
           <div className="flex flex-wrap gap-4 justify-center my-2">
            {types.map((tag, index) => (
                <div className="bg-rose-600 rounded-full px-4 py-1 text-white capitalize">{tag.type.name}</div>
            ))}
           </div>
           <Link to={`/pokedex/detail/${data.id}`}>Details {`>>`}</Link>
        </div>
    )
}
export default PokemonCard;