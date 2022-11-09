import { useDispatch } from "react-redux";
import { setPokemonFilter } from "@/actions";


export const SearchBar = () => {
    const dispatch = useDispatch();

    const applyfilter = (e) => {
        dispatch(setPokemonFilter(e.target.value));
    }

    return (
        <div className="mx-auto max-w-[600px] my-12 text-center">
            <input onChange={applyfilter} type="search" placeholder="Search..." className="outline-none h-12 border px-4 min-w-[300px]" />
        </div>
    )
}