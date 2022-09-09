import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(){
    return(
        <section className="h-[90vh] flex flex-col items-center justify-center">
            <div className="text-4xl text-rose-600">Error 404</div>
            <Link to="/pokedex" className="underline">Go Home</Link>
        </section>
    )
}