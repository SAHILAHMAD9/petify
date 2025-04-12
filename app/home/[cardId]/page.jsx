// app/home/[cardId]/page.jsx
'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import toast from 'react-hot-toast';

const petsData = [
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
]

export default function PetCardPage() {
    const params = useParams();
    const router = useRouter();
    const { cardId } = params;
    const [pet, setPet] = useState(null);
    const [loading, setLoading] = useState(true);
    const { isSignedIn, user, isLoaded } = useUser();

    useEffect(() => {
        const foundPet = petsData.find(p => p.id === cardId);
        setPet(foundPet || null);
        setLoading(false);
    }, [cardId]);

    const handleAdoptClick = () => {
        if (!isSignedIn) {
            toast.error('Please sign in to continue');
            router.push('/login');
        }
        else if (pet) {
            router.push(`/adopt?petName=${pet.name}`)
        };
    };

    if (loading) {
        return (
            <div className="container mx-auto px-4 z-10 py-12 text-center">
                <p className="text-2xl font-bold text-purple-700">Loading...</p>
            </div>
        );
    }

    if (!pet) {
        return (
            <div className="container mx-auto px-4 z-10 py-12 text-center">
                <h1 className="text-2xl font-bold text-pink-700 mb-4">Pet not found</h1>
                <p className="mb-6 text-pink-600">Sorry, we couldn't find the pet you're looking for.</p>
                <Link href="/home">
                    <button className="text-white rounded-lg py-3 px-6 mb-2 font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        Return to all pets
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container min-h-screen mx-auto px-4 py-8">
            <Link href="/home" >
                <button className="text-white rounded-lg py-3 px-6 mb-2 font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    ← Back to all pets
                </button>
            </Link>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/2">
                        <img
                            src={pet.image}
                            alt={pet.name}
                            className="w-full h-80 md:h-[700px] object-cover"
                        />
                    </div>
                    <div className="p-6 flex flex-col  md:justify-between md:w-1/2">
                        <div className="flex justify-between items-start mb-4">
                            <h1 className="text-3xl font-bold text-purple-700">{pet.name}</h1>
                            <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                                {pet.age}
                            </span>
                        </div>
                        <div>
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#9333ea"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="11" cy="4" r="2" />
                                        <circle cx="18" cy="8" r="2" />
                                        <circle cx="20" cy="16" r="2" />
                                        <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
                                    </svg>
                                    <span>Type: {pet.type}</span>
                                </div>

                                <div className="flex items-center gap-2 text-gray-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#9333ea"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span>Location: {pet.location}</span>
                                </div>

                                <div className="flex items-center gap-2 text-gray-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#9333ea"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M18 8c0 1.6-1.4 6-6 6S6 9.6 6 8s1.4-3 6-3 6 1.4 6 3z"></path>
                                        <path d="M18 8v8c0 1.6-1.4 3-6 3s-6-1.4-6-3V8"></path>
                                    </svg>
                                    <span>Breed: {pet.breed}</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl text-pink-600 font-semibold mb-2">About {pet.name}</h2>
                                <p className="text-gray-700">{pet.description}</p>
                            </div>

                            <div className="flex flex-col xl:justify-between justify-center items-center gap-3 pt-3 border-t">
                                <span className="font-semibold text-base sm:text-lg text-purple-600 order-2 xl:order-1">Free to Good Home</span>
                                <button onClick={handleAdoptClick} className="w-full text-white rounded-3xl py-2 px-4 sm:px-5 font-bold text-sm sm:text-base lg:text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                                    Adopt {pet.name}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}