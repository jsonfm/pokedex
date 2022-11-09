import React from "react";


export const Skeleton = ({n_cards=8}) => {

    return (
        <div className="grid gap-4 md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center py-4 transition ease-in-out delay-150">
            {[...Array(n_cards).keys()].map((index)=>(
            <div className="animate-pulse shadow-xl w-72 min-h-[250px] p-4 grid place-content-center transition ease-in-out delay-150" key={`sk-${index}`}>
                <div className="flex flex-row-reverse">
                    <div className="form-control w-full">   
                        <span className="label-text bg-gray-200 w-full h-6 mb-4"></span>
                    </div>
                </div>
                <div className="flex flex-col h-64 bg-gray-200"></div>
                <p className="font-bold text-center text-xl capitalize mb-2"></p>
                <div className="flex gap-3 mb-4 w-64">
                    <div className="flex items-center w-full h-6 bg-gray-200"></div>
                    <div className="flex items-center w-full h-6 bg-gray-200"></div>
                    <div className="flex items-center w-full h-6 bg-gray-200"></div>
                </div>
            </div>
            ))}
        </div>
    )
}