'use client'
import React from 'react';
import { motion } from "framer-motion";
import EnhancedPetCard from "@/components/ui/Petcard";

const page = () => {
  const pets = [
    {
      id: "whiskers",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3",
      name: "Whiskers",
      type: "Cat",
      breed: "Persian",
      age: "1 year",
      location: "New Delhi, IN",
      price: "Free to Good Home"
    },
    {
      id: "rocky",
      image: "https://images.unsplash.com/photo-1587764379873-97837921fd44?ixlib=rb-4.0.3",
      name: "Rocky",
      type: "Dog",
      breed: "Golden Retriever",
      age: "2 years",
      location: "Mumbai, IN",
      price: "$500"
    },
    {
      id: "luna",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.0.3",
      name: "Luna",
      type: "Cat",
      breed: "Siamese",
      age: "6 months",
      location: "Delhi, IN",
      price: "Free to Good Home"
    },
    {
      id: "max",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3",
      name: "Max",
      type: "Dog",
      breed: "Labrador",
      age: "3 years",
      location: "Bangalore, IN",
      price: "$400"
    },
    {
      id: "oliver",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3",
      name: "Oliver",
      type: "Cat",
      breed: "Bengal",
      age: "2 years",
      location: "Chennai, IN",
      price: "$300"
    },
    {
      id: "bella",
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3",
      name: "Bella",
      type: "Dog",
      breed: "Beagle",
      age: "1 year",
      location: "Hyderabad, IN",
      price: "$450"
    },
    {
      id: "leo",
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3",
      name: "Leo",
      type: "Cat",
      breed: "Maine Coon",
      age: "4 years",
      location: "Kolkata, IN",
      price: "Free to Good Home"
    },
    {
      id: "daisy",
      image: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3",
      name: "Daisy",
      type: "Dog",
      breed: "Poodle",
      age: "2 years",
      location: "Pune, IN",
      price: "$350"
    },
    {
      id: "charlie",
      image: "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3",
      name: "Charlie",
      type: "Dog",
      breed: "Husky",
      age: "1.5 years",
      location: "Jaipur, IN",
      price: "$550"
    }
  ];

  return (
    <div className='z-0 flex p-2 lg:p-0 w-full container text-black'>
      <div className="flex gap-3 flex-col mx-auto py-4">
        <div className="flex justify-center lg:justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex justify-center  items-center xl:items-start flex-col'
          >
            <h2 className="text-4xl md:text-5xl text-purple-700 font-bold mb-4">All Pets</h2>
            <p className="text-purple-500 text-center text-xl">Meet our adorable friends waiting for a home</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
          {pets.map((pet) => (
            <EnhancedPetCard
              key={pet.id}
              id={pet.id}
              image={pet.image}
              name={pet.name}
              type={pet.type}
              breed={pet.breed}
              age={pet.age}
              location={pet.location}
              price={pet.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;