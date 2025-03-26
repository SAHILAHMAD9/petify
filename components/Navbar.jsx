"use client"
import Link from 'next/link'
import ShimmerButton from "./ui/Button";

export const Navbar = () => {
  return (
    <div className="flex flex-wrap z-[9999] sticky top-0 items-center min-w-full justify-between bg-gradient-to-r to-[#A1B4C8] from-[#202c54] md:p-3 p-2">
      {/* Logo Section */}
      <Link href='/'>
        <div className="flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold relative">
          {/* Paw Icon with Higher Z-index */}
          <span className="z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32" 
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a1a1aa" 
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
          </span>
          {/* Petify Text */}
          <p className="relative z-40 ml-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Petify
          </p>
        </div>
      </Link>

      {/* Right Section */}
      <div className="flex flex-row items-center justify-between relative">
        <div className="flex top-0 left-0"></div>
        {/* Buttons Section */}
        <div className="flex relative px-6 gap-2 sm:gap-4 items-center sm:mt-0">
          {/* Sign Up Button Placeholder */}
          <ShimmerButton href='/signup' className="text-white ">Register </ShimmerButton>
          <ShimmerButton href='/login' className="text-white ">Log in </ShimmerButton>
        </div>
      </div>
    </div>
  )
}
