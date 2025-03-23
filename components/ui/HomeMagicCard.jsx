import React from 'react'
import { MagicCard } from './magicCard';
import Image from 'next/image';


const HomeMagicCard = ({ heading, para, gradientColor , profileColour}) => {
  return (
      <MagicCard className="cursor-pointer flex flex-col h-[18rem] items-center justify-center whitespace-normal shadow-2xl px-4 overflow-hidden text-center" gradientColor={gradientColor || "#dec686"}>
        <div className={`w-16 h-16 ${profileColour} rounded-full flex items-center justify-center mx-auto mb-6`}>
              {/* <Image src='/assets/image/cat1.jpg' width={45} height={45}
                  className="rounded-full" alt="cat1" /> */}
          </div>
          <h3 className="text-xl font-semibold mb-4">{heading}</h3>
          <p className="text-gray-400">{para}</p>
      </MagicCard>
  )
}
export default HomeMagicCard;