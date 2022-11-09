import React from 'react';
import { Link } from "react-router-dom";
import { TagList } from "@/components/TagList";


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
        <Link to={`/detail/${data.id}`} className="rounded-md shadow-xl w-64 min-h-[250px] p-4 grid place-content-center transition ease-in-out hover:scale-105">
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
           {/* <div className="flex flex-wrap gap-4 justify-center my-2">
            {types.map((tag, index) =>{
                const name = tag.type.name;
                const color = tagColor[name];
                const background = tagBackground[name];
                return <div className={`${background} ${color} px-4 py-1 capitalize`} key={`tag-${index}`}>{tag.type.name}</div>
            })}
           </div> */}
           <TagList tags={types} />
        </Link>
    )
}