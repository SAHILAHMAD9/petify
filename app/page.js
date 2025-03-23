"use client"
import CTA from "@/components/cta";
import { Highlight, HeroHighlight } from "@/components/ui/Highlight";
import HomeMagicCard from "@/components/ui/HomeMagicCard";
import { MagicCard } from "@/components/ui/magicCard";
import EnhancedPetCard from "@/components/ui/Petcard";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
    {/* <AbortController></AbortController> */}

      <div className="flex  gap-4 items-center justify-center w-full my-4">
        <HeroHighlight>
          <CTA />
        </HeroHighlight>
      </div>
      <section className="py-24 w-full ">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl text-black font-bold mb-4">Featured Pets</h2>
              <p className="text-black text-xl">Meet our adorable friends waiting for a home</p>
            </div>
            {/* <Button variant="outline" size="lg" className="gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button> */}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
      </section>
      <div className="flex z-30 items-center justify-center w-full text-white flex-col py-20 px-8 gap-4 m-0 ">
        <div>
          <h1 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-500">Why Choose Petify?</h1>
        </div>
        <div className="flex gap-4">

          <HomeMagicCard para='Find the perfect pet or owner with our advanced search features.' heading={'Easy'} gradientColor="#dec686" profileColour={'bg-blue-500/30'} />
          
          <HomeMagicCard para='Connect directly with pet owners or potential adopters.' heading={'Direct Communication'} gradientColor="#ec4899" profileColour={"bg-purple-500/20"}/>

          <MagicCard className="cursor-pointer flex flex-col h-[18rem] items-center justify-center whitespace-normal shadow-2xl px-4 overflow-hidden text-center" gradientColor="#0891b2">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          </div>
          <h3 className="text-xl font-semibold mb-4">Loving Homes</h3>
          <p className="text-gray-400">Ensure your pet finds a caring and suitable new family.</p>
          </MagicCard>

          <MagicCard className="cursor-pointer flex flex-col h-[18rem] items-center justify-center whitespace-normal shadow-2xl px-4 overflow-hidden text-center" gradientColor="#c084fc">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          </div>
          <h3 className="text-xl font-semibold mb-4">Secure Platform</h3>
          <p className="text-gray-400">Your safety and privacy are our top priorities.</p>
          </MagicCard>
        </div>
      </div>
      <div className="flex z-30 items-center justify-center w-full text-white flex-col gap-4 py-20 px-4 m-0 ">
        <div>
          <h1 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-500">How Petify Works</h1>
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
        <h2 className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-500 font-bold text-center mb-12">What Pet Lovers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
          <div className="bg-gray-900/30 p-8 rounded-2xl">
            <p className=" mb-6">"Petify made it so easy to find a loving home for my dog when I had to move abroad. I'm grateful for this platform!"</p>
            <div className="flex items-center">
              <div className="ml-4">
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-800">Dog Owner</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 p-8 rounded-2xl">
            <p className=" mb-6">"Thanks to Petify, I found my perfect feline companion. The process was smooth and the communication was great."</p>
            <div className="flex items-center">
              <div className="ml-4">
                <p className="font-semibold text-gray-900">Michael Chen</p>
                <p className="text-sm text-gray-800">Cat Adopter</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 p-8 rounded-2xl">
            <p className=" mb-6">"I was worried about finding a good home for my rabbits, but Petify connected me with wonderful adopters quickly."</p>
            <div className="flex items-center">
              <div className="ml-4">
                <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                <p className="text-sm text-gray-800">Rabbit Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
