import React from 'react'

const EnhancedPetCard = ({ image, name, type, breed, age, location, price }) => {
    return (
        <div className="group bg-white text-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="h-72 overflow-hidden relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                        <p className="text-gray-600">{breed}</p>
                    </div>
                    <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                        {age}
                    </span>
                </div>
                <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#9333ea"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-paw-print"
                        >
                            <circle cx="11" cy="4" r="2" />
                            <circle cx="18" cy="8" r="2" />
                            <circle cx="20" cy="16" r="2" />
                            <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
                        </svg>
                        {type}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        {location}
                    </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                    <span className="font-semibold text-lg text-purple-600">{price}</span>
                    {/* <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        View Details
                    </Button> */}
                </div>
            </div>
        </div>
    );
}
export default EnhancedPetCard;