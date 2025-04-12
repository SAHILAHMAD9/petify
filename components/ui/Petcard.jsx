'use client'
import React from 'react';
import Link from 'next/link';

const EnhancedPetCard = ({ image, name, type, breed, age, location, price, id }) => {
    return (
        <div className="group container mx-auto bg-white text-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all max-w-sm md:max-w-md lg:max-w-lg">
            <div className="h-48 sm:h-52 md:h-64 lg:h-72 overflow-hidden relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-3 sm:p-4 md:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2 sm:mb-4">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-purple-700 mb-1 sm:mb-2">{name}</h3>
                        <p className="text-gray-600 text-sm sm:text-base">{breed}</p>
                    </div>
                    <span className="px-3 py-1 sm:px-4 sm:py-2 bg-purple-100 text-purple-600 rounded-full text-xs sm:text-sm font-medium mt-2 sm:mt-0 self-start">
                        {age}
                    </span>
                </div>
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
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
                            className="w-5 h-5 sm:w-6 sm:h-6"
                        >
                            <circle cx="11" cy="4" r="2" />
                            <circle cx="18" cy="8" r="2" />
                            <circle cx="20" cy="16" r="2" />
                            <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
                        </svg>
                        <span className="text-sm sm:text-base">{type}</span>
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
                            className="w-5 h-5 sm:w-6 sm:h-6"
                        >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span className="text-sm sm:text-base">{location}</span>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between justify-center items-center gap-3 pt-3 border-t">
                    <span className="font-semibold text-base sm:text-lg text-purple-600 order-2 sm:order-1">Free to Good Home</span>
                    <Link href={`/home/${id}`} className="w-full sm:w-auto order-1 sm:order-2">
                        <button className="w-full text-white rounded-3xl py-2 px-4 sm:px-5 font-bold text-sm sm:text-base lg:text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default EnhancedPetCard;