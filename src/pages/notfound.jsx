import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(){
    return(
        <section className="h-[80vh] flex flex-col items-center justify-center">
            <div className="text-4xl text-rose-600 mb-6">Error 404</div>
            <Link to="/" className="hover:underline hover:scale-110 duration-150">Go Home</Link>
        </section>
    )
}