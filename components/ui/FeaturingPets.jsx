'use client'
import React from 'react'
import EnhancedPetCard from "@/components/ui/Petcard";
import { motion } from "framer-motion";
import Link from 'next/link';

const FeaturingPets = () => {
  return (
      <section className="py-24 w-full z-0 rounded-lg bg-white">
          <div className="mx-auto px-4">
              <div className="flex gap-2 justify-between items-center flex-col md:flex-row mb-5 md:mb-16">
                  <motion.div initial={{ opacity: 0, x: -90 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }} className='flex justify-center items-center xl:items-start flex-col '>
                      <h2 className="text-4xl md:text-5xl text-purple-700 font-bold mb-4">Featured Pets</h2>
                      <p className="text-purple-600 text-center bg-center text-xl">Meet our adorable friends waiting for a home</p>
                  </motion.div>
                  <Link href={'/home'}>
                      <motion.button
                          initial={{ opacity: 0, x: 90 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="w-full sm:w-auto text-white rounded-3xl py-2 px-4 sm:px-5 font-bold text-sm sm:text-base lg:text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 order-1 sm:order-2">
                          View More
                      </motion.button>
                  </Link>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8">
                  <EnhancedPetCard
                      id="whiskers"
                      image="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3"
                      name="Whiskers"
                      type="Cat"
                      breed="Persian"
                      age="1 year"
                      location="New Delhi, IN"
                      price="Free to Good Home"
                  />
                  <EnhancedPetCard
                      id='rocky'
                      image="https://images.unsplash.com/photo-1587764379873-97837921fd44?ixlib=rb-4.0.3"
                      name="Rocky"
                      type="Dog"
                      breed="Golden Retriever"
                      age="2 years"
                      location="Munbai, IN"
                      price="$500"
                  />
                  <EnhancedPetCard
                      id='luna'
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
      </section>
  )
}
export default FeaturingPets;