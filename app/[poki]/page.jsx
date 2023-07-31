import PokiImage from '@/components/PokiImage';
import { Progress } from '@/components/ui/progress';
import { getPoki } from '@/lib/api';
import Image from 'next/image';

import React from 'react';
/**
 * Fade in effect we need to have acess the client 
 * 
 */
export default async function page({params}) {
 
  const {poki} = params;
  console.log(`Poki name is ${poki}`);
  const pokiObject = await getPoki(poki);

  return (
    <>
    <h1 className='text-4xl text-bold '>{poki.charAt(0).toUpperCase()+poki.slice(1)}</h1>
    <div className='m-4 w-[300px] h-[200px] relative'>
      <PokiImage 
        image={pokiObject.sprites.other['official-artwork'].front_default} 
        poki={poki}
      />
    </div>

    <h3>Weight:{pokiObject.weight}</h3>

    <div className='flex-col text-lg'>
      {
        pokiObject.stats.map((e)=>{
           const statName = e.stat.name;
           const statValue = e.base_stat;
          return(
            <div className='flex items-stretch w-[501px]' key={statName}>
               <h3 className='p-3 w-2/4'>{statName}: {statValue}</h3>
               <Progress className='m-auto w-2/4' value={statValue}/>
            </div>
          )
        })
      }
    </div>
    </>
  )
}
