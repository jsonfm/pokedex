import React from "react";
import {Link} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header(){
    const [showMenu, setShowMenu] = React.useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return(
        <header className="bg-rose-600 text-white fixed w-full">
            <nav className="container h-16 px-4 flex items-center justify-between">
                <Link to="/pokedex/" className="text-2xl">Pokedex</Link>
                <ul className={`ease-in duration-300 ${showMenu ? 'left-0' :'-left-[110%]'} bg-rose-600 absolute top-16 h-screen w-2/3 px-4 py-5 text-xl`}>
                    <li>Pokemons</li>
                </ul>
                <div className="text-2xl hover:cursor-pointer" onClick={toggleMenu}>
                    <GiHamburgerMenu/>
                </div>
            </nav>
        </header>
    )
}