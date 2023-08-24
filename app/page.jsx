import Grid from "@/components/Grid";
import { getPokemonList } from "@/lib/api";

/**
 * 
 * Next js recommends that way fetching  the data on the server
 * We want to have an interaction with the app that searches for the give pokemon
 * if it's there we will display it else we show No pokemon found
 * to have that interaction we need to use some hooks to get the input and preserve it
 * and pass it to the server and get result btw how to do it ?
 * 
 * Load the data from the api and pass it to the down the list 
 */
export default async function Home() {
  const pokemonList = await getPokemonList();
  return (<Grid list={pokemonList}/>
  )
}
