import React from "react";


export const Skeleton = ({ n_cards=8 }) => {

    return (
        <div className="flex flex-wrap gap-4 justify-center transition ease-in-out delay-150">

            {[...Array(n_cards).keys()].map((index)=>(
            <div className="rounded-md animate-pulse shadow-xl w-64 min-h-[250px] p-2 transition ease-in-out delay-150" key={`sk-${index}`}>
                <div className="rounde-md flex flex-col h-64 mx-auto bg-gray-300"></div>
                <div className="flex justify-center  px-3 gap-2 mt-4 mb-4 w-full mx-auto">
                    <div className="rounde-md flex items-center w-[60px]  h-6 bg-gray-200"></div>
                    <div className="rounded-md flex items-center w-[60px] h-6 bg-gray-200"></div>
                    <div className="rounded-md flex items-center w-[60px] h-6 bg-gray-200"></div>
                </div>
            </div>
            ))}

        </div>
    )
}