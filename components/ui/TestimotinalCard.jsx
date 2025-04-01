import React from 'react'

const TestimotinalCard = ({feedback, name, owner}) => {
  return (
      <div className="bg-gray-900/30 p-8 rounded-2xl">
          <p className=" mb-6 text-[#FCF7F8]">"{feedback}"</p>
          <div className="flex items-center">
              <div className="ml-4">
                  <p className="font-semibold text-gray-900">{name}</p>
                  <p className="text-sm text-gray-800">{owner}</p>
              </div>
          </div>
      </div>
  )
}
export default TestimotinalCard;