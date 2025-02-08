"use client"
import CTA from "@/components/cta";
import { Highlight, HeroHighlight } from "@/components/ui/Highlight";
import { MagicCard } from "@/components/ui/magicCard";


export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-items-center px-4 font-[family-name:var(--font-geist-sans)]">

      <div className="flex  gap-4 items-center justify-center w-full my-4">
        <HeroHighlight>
          <CTA />
        </HeroHighlight>
      </div>
      <div className="flex z-30 items-center justify-center w-full text-white flex-col py-20 px-4 gap-4 m-0 ">
        <div>
          <h1 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">Why Choose Petify?</h1>
        </div>
        <div className="flex gap-4">

          <MagicCard className="cursor-pointer flex flex-col h-[18rem] items-center justify-center whitespace-normal shadow-2xl px-4 overflow-hidden text-center" gradientColor="#262626">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          </div>
          <h3 className="text-xl font-semibold mb-4">Easy Search</h3>
          <p className="text-gray-400">Find the perfect pet or owner with our advanced search features.</p>
          </MagicCard>

          <MagicCard className="cursor-pointer flex flex-col h-[18rem] items-center justify-center whitespace-normal shadow-2xl px-4 overflow-hidden text-center" gradientColor="#262626">
          <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          </div>
          <h3 className="text-xl font-semibold mb-4">Direct Communication</h3>
          <p className="text-gray-400">Connect directly with pet owners or potential adopters.</p>
          </MagicCard>

          <MagicCard className="cursor-pointer flex flex-col h-[18rem] items-center justify-center whitespace-normal shadow-2xl px-4 overflow-hidden text-center" gradientColor="#262626">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          </div>
          <h3 className="text-xl font-semibold mb-4">Loving Homes</h3>
          <p className="text-gray-400">Ensure your pet finds a caring and suitable new family.</p>
          </MagicCard>

          <MagicCard className="cursor-pointer flex flex-col h-[18rem] items-center justify-center whitespace-normal shadow-2xl px-4 overflow-hidden text-center" gradientColor="#262626">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          </div>
          <h3 className="text-xl font-semibold mb-4">Secure Platform</h3>
          <p className="text-gray-400">Your safety and privacy are our top priorities.</p>
          </MagicCard>
        </div>
      </div>
      <div className="flex z-30 items-center justify-center w-full text-white flex-col gap-4 py-20 px-4 m-0 ">
        <div>
          <h1 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">How Petify Works</h1>
        </div>
        <div className="flex gap-4">

          <MagicCard className="cursor-pointer flex flex-col h-[18rem] items-center justify-center whitespace-normal shadow-2xl px-4 overflow-hidden text-center" gradientColor="#262626">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            </div>
          <h3 className="text-xl font-semibold mb-4">Create an Account</h3>
          <p className="text-gray-400">Sign up and create your profile as a pet owner or potential adopter.</p>
          </MagicCard>

          <MagicCard className="cursor-pointer flex flex-col h-[18rem] items-center justify-center whitespace-normal shadow-2xl px-4 overflow-hidden text-center" gradientColor="#262626">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            </div>
            <h3 className="text-xl font-semibold mb-4">Connect and Communicate</h3>
          <p className="text-gray-400">Browse listings, connect with others, and discuss pet details.</p>
          </MagicCard>

          <MagicCard className="cursor-pointer flex flex-col h-[18rem] items-center justify-center whitespace-normal shadow-2xl px-4 overflow-hidden text-center" gradientColor="#262626">
          <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            </div>
            <h3 className="text-xl font-semibold mb-4">Find a New Home</h3>
          <p className="text-gray-400">Arrange meetings and find the perfect new home for your pet.</p>
          </MagicCard>
        </div>
      </div>
      

      {/* Testimonials Section */}
      <div className="flex z-30 items-center justify-center w-full text-white flex-col gap-8 py-20 px-4">
        <h2 className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 font-bold text-center mb-12">What Pet Lovers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
          <div className="bg-gray-900/30 p-8 rounded-2xl">
            <p className="text-gray-300 mb-6">"Petify made it so easy to find a loving home for my dog when I had to move abroad. I'm grateful for this platform!"</p>
            <div className="flex items-center">
              <div className="ml-4">
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-gray-400">Dog Owner</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 p-8 rounded-2xl">
            <p className="text-gray-300 mb-6">"Thanks to Petify, I found my perfect feline companion. The process was smooth and the communication was great."</p>
            <div className="flex items-center">
              <div className="ml-4">
                <p className="font-semibold">Michael Chen</p>
                <p className="text-sm text-gray-400">Cat Adopter</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 p-8 rounded-2xl">
            <p className="text-gray-300 mb-6">"I was worried about finding a good home for my rabbits, but Petify connected me with wonderful adopters quickly."</p>
            <div className="flex items-center">
              <div className="ml-4">
                <p className="font-semibold">Emily Rodriguez</p>
                <p className="text-sm text-gray-400">Rabbit Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
