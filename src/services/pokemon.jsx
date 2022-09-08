export default class PokemonService {
    constructor(api="https://pokeapi.co/api/v2/pokemon"){
        this.api = api;
    }

    async getAllPokemons(limit=12, offset=12){
        const response = fetch(`${this.api}?offset=${offset}&limit=${limit}`).then(res => res.json());
        return response;
    }

    async getAllPokemonsFull(limit=12, offset=12){
        const data = await this.getAllPokemons(limit, offset);
        const pokemons = await Promise.all(data.results.map(result => fetch(result.url).then(res => res.json())));
        return pokemons;
    }
}