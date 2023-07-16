'use client'
import Image from 'next/image';
export default function PokiImage({image,poki}) {
  return (
    <Image 
        src={image}
        alt={"Picture "+poki}
        width={200}
        height={200}
        priority
        style={{
          "objectFit" : "contain"
        }}
        className='transition-opacity opacity-0 duration-[2s]'
        onLoadingComplete={(image)=>image.classList.remove("opacity-0")}
    />
  )
}
/**
 * priority boolean load the thing as fast as possible
 * fill - fill the image container
 * onLoadingComplete  => when next js downlaoding the image we can dispaly the image
 * 
 */