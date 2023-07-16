/**
 * Client component
 * it had some interaction in it
 * give us input bar to search the pokiii
 * and the results in the grid of 3 X auto
 * 
 */
'use client';
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Card from "./Card";

export default function Grid({list}) {

    const [search,setSearch]=useState("");
    const searchFilter = (list)=>{
        return list.filter((poki)=>poki.name.toLowerCase().includes(search.toLowerCase()));
    }
    const filteredList = searchFilter(list);
  return (
   <>
     <div>
         <h3 className="text-2xl py-6  text-center">Search for your Pokii</h3>
         <div  className="grid  w-full  max-w-sm items-center gap-1.5"   >
            <Label htmlFor="pokemonName">PokemonName</Label>
            <Input 
                type='text' 
                value={search} 
                id="pokemonName"
                placeholder="Pikachu...My notification tone"
                autoComplete="off"
                onChange={(e)=>setSearch(e.target.value)}
            />
         </div>
         <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>
     </div>
     <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
         {filteredList.map((poki,index)=>{
           return <Card name={poki.name} key={index}/>
         })}
      </div>
   </>
  )
}

