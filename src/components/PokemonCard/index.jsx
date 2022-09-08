import React from 'react';

const PokemonCard = ({data}) => {
    console.log("data: ", data);
    const {front_default: image} = data.sprites;
    const {
        name,
        height,
        base_experience: experience,
        weight,
    } = data;
    return(
        <div className="border w-72 p-4 grid place-content-center">
           <img
            src={image}
            className="w-48"
           />
           <p className="font-bold text-center text-xl">{name}</p>
           <div className="flex gap-3">
                <div className="flex flex-col items-center">
                    <p>Height</p>
                    <p>{height}</p>
                </div>
                <div className="flex flex-col items-center">
                    <p>Weight</p>
                    <p>{weight}</p>
                </div>
                <div className="flex flex-col items-center">
                    <p>Experience</p>
                    <p>{experience}</p>
                </div>
           </div>
        </div>
    )
}
export default PokemonCard;