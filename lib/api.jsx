//Pokemon List get -> req
const POKEMON_API = 'https://pokeapi.co/api/v2/' ; 
export async function getPokemonList()
{
    const res = await fetch(POKEMON_API + "pokemon?limit=200&offset=0");
    const data = await res.json();
    return data.results;
}   
//Single PokeMon 
export async function getPoki(name)
{

    const res = await fetch(POKEMON_API+`pokemon/${name}`);
    const data = await res.json();
    return data ;
}