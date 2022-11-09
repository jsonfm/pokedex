import React from 'react';
import { Link } from "react-router-dom";


export const PokemonCard = ({ data }) => {

    const {
        front_default,
        back_default    
    } = data.sprites;

    const {
        name,
        height,
        base_experience: experience,
        weight,
        types
    } = data;

    return(
        <Link to={`/pokedex/detail/${data.id}`} className="shadow-xl w-64 min-h-[250px] p-4 grid place-content-center transition ease-in-out delay-150">
            {/* <div className="flex flex-row-reverse">
                <div className="form-control w-full">
                    <label className="label cursor-pointer">
                        <span className="label-text text-gray-500">Normal</span>
                        <input type="checkbox" className="toggle" />
                    </label>
                </div>
            </div> */}
            <div className="flex flex-col">
                <img
                    src={front_default}
                    className="w-48 h-56"
                />
            </div>
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
                <div className="bg-rose-600 rounded-full px-4 py-1 text-white capitalize" key={`tag-${index}`}>{tag.type.name}</div>
            ))}
           </div>
        </Link>
    )
}