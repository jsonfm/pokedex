export default class PokemonService {
    constructor(api="https://pokeapi.co/api/v2/pokemon"){
        this.api = api;
    }

    /**
     * Returns a list of available Pokemon
     * @param {number} limit 
     * @param {number} offset 
     * @returns 
     */
    async getAllPokemons(limit=12, offset=12){
        const response = fetch(`${this.api}?offset=${offset}&limit=${limit}`).then(res => res.json());
        return response;
    }

    /**
     * Returns a list of Pokemons with full detailed info
     * @param {number} limit 
     * @param {number} offset 
     * @returns 
     */
    async getAllPokemonsFull(limit=12, offset=12){
        const data = await this.getAllPokemons(limit, offset);
        const pokemons = await Promise.all(data.results.map(result => fetch(result.url).then(res => res.json())));
        return pokemons;
    }

    /**
     * Returns a single Pokemon info given an id
     * @param {number} id 
     * @returns 
     */
    async getPokemon(id=1){
        return await fetch(`${this.api}/${id}`).then(res => res.json());
    }



}