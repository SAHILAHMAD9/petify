'use client'
import FeaturingPets from '@/components/ui/FeaturingPets';
import React from 'react';
import { motion } from "framer-motion";
import EnhancedPetCard from "@/components/ui/Petcard";

const page = () => {
  return (
    <div className='z-0 flex p-2 md:p-0 w-full container text-black'>
      <div className="flex gap-3 flex-col mx-auto py-4">
        <div className="flex justify-between items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -90 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }} className='flex justify-center items-start flex-col '>
            <h2 className="text-4xl md:text-5xl text-black font-bold mb-4">All Pets</h2>
            <p className="text-black text-xl">Meet our adorable friends waiting for a home</p>
          </motion.div>
            {/* <motion.button
              initial={{ opacity: 0, x: 90 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-[150px] text-white rounded-3xl py-2 px-4 sm:px-5 font-bold text-sm sm:text-base lg:text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 order-1 sm:order-2">
              View More
            </motion.button> */}
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          <EnhancedPetCard
            image="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3"
            name="Whiskers"
            type="Cat"
            breed="Persian"
            age="1 year"
            location="New Delhi, IN"
            price="Free to Good Home"
          />
          <EnhancedPetCard
            image="https://images.unsplash.com/photo-1587764379873-97837921fd44?ixlib=rb-4.0.3"
            name="Rocky"
            type="Dog"
            breed="Golden Retriever"
            age="2 years"
            location="Munbai, IN"
            price="$500"
          />
          <EnhancedPetCard
            image="https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.0.3"
            name="Luna"
            type="Cat"
            breed="Siamese"
            age="6 months"
            location="Delhi, IN"
            price="Free to Good Home"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          <EnhancedPetCard
            image="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3"
            name="Whiskers"
            type="Cat"
            breed="Persian"
            age="1 year"
            location="New Delhi, IN"
            price="Free to Good Home"
          />
          <EnhancedPetCard
            image="https://images.unsplash.com/photo-1587764379873-97837921fd44?ixlib=rb-4.0.3"
            name="Rocky"
            type="Dog"
            breed="Golden Retriever"
            age="2 years"
            location="Munbai, IN"
            price="$500"
          />
          <EnhancedPetCard
            image="https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.0.3"
            name="Luna"
            type="Cat"
            breed="Siamese"
            age="6 months"
            location="Delhi, IN"
            price="Free to Good Home"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          <EnhancedPetCard
            image="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3"
            name="Whiskers"
            type="Cat"
            breed="Persian"
            age="1 year"
            location="New Delhi, IN"
            price="Free to Good Home"
          />
          <EnhancedPetCard
            image="https://images.unsplash.com/photo-1587764379873-97837921fd44?ixlib=rb-4.0.3"
            name="Rocky"
            type="Dog"
            breed="Golden Retriever"
            age="2 years"
            location="Munbai, IN"
            price="$500"
          />
          <EnhancedPetCard
            image="https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.0.3"
            name="Luna"
            type="Cat"
            breed="Siamese"
            age="6 months"
            location="Delhi, IN"
            price="Free to Good Home"
          />
        </div>
      </div>
    </div>
  )
}
export default page