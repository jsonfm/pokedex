import React from "react";
import {Link} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header(){
    const [showMenu, setShowMenu] = React.useState(false);
    const [ shadow, setShadow ] = React.useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const handleScroll = () => {
        setShadow(window.scrollY > 120);
    }

   React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
   }, []);

    return(
        <header className={` ${shadow ? 'shadow-sm': ''} ease-linear duration-100 bg-white text-gray-500 fixed w-full`}>
            <nav className="container h-16 px-4 flex items-center justify-between">
                <Link to="/pokedex/" className="text-2xl">Pokedex</Link>
                <ul className={`ease-in duration-300 ${showMenu ? 'left-0' :'-left-[110%]'} bg-white absolute top-16 h-screen w-2/3 px-4 py-5 text-base lg:h-auto lg:w-auto lg:relative lg:top-0 lg:py-0 lg:left-0`}>
                    <li>Pokemons</li>
                </ul>
                <div className="text-2xl hover:cursor-pointer lg:hidden" onClick={toggleMenu}>
                    <GiHamburgerMenu/>
                </div>
            </nav>
        </header>
    )
}