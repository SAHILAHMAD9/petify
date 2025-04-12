import React from 'react'
import { MagicCard } from './magicCard';
import Image from 'next/image';


const HomeMagicCard = ({ heading, para, gradientColor, img, profileColour }) => {
  return (
    <MagicCard className="cursor-pointer relative flex flex-col h-[13rem] md:h-[18rem] items-center justify-center whitespace-normal shadow-2xl px-4 overflow-hidden text-center" gradientColor={gradientColor || "#dec686"}>
      <div className={`w-16 h-16 ${profileColour} overflow-hidden relative rounded-full flex items-center justify-center mx-auto mb-6`}>
        <div className=' flex z-30'>
          <Image src={img} fill property
            className="object-center object-cover" alt="cat1" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-4">{heading}</h3>
      <p className="text-[#FFDAFC]">{para}</p>
    </MagicCard>
  )
}
export default HomeMagicCard;