"use client"
import CTA from "@/components/cta";
import FeaturingPets from "@/components/ui/FeaturingPets";
import { Highlight, HeroHighlight } from "@/components/ui/Highlight";
import HomeMagicCard from "@/components/ui/HomeMagicCard";
import { MagicCard } from "@/components/ui/magicCard";
import TestimotinalCard from "@/components/ui/TestimotinalCard";



export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
    {/* <AbortController></AbortController> */}

      <div className="flex  gap-4 items-center justify-center w-full min-h-screen my-4">
        <HeroHighlight>
          <CTA />
        </HeroHighlight>
      </div>

      <FeaturingPets/>
      <div className="flex z-0 items-center justify-center w-full text-white flex-col py-20 px-8 gap-4 m-0 ">
        <div>
          <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-500">Why Choose Petify?</h1>
        </div>
        <div className="flex gap-4">

          <HomeMagicCard para='Find the perfect pet or owner with our advanced search features.' heading={'Easy'} gradientColor="#dec686" profileColour={'bg-blue-500/30'} />
          
          <HomeMagicCard para='Connect directly with pet owners or potential adopters.' heading={'Direct Communication'} gradientColor="#ec4899" profileColour={"bg-purple-500/20"} />
          
          <HomeMagicCard para='Ensure your pet finds a caring and suitable new family.' heading={'Loving Homes'} gradientColor="#0891b2" profileColour={"bg-green-500/20"} />
          
          <HomeMagicCard para='Your safety and privacy are our top priorities.' heading={'Secure Platform'} gradientColor="#c084fc" profileColour={"bg-blue-500/20"} />
          
        </div>
      </div>
      <div className="flex z-0 items-center justify-center w-full text-white flex-col gap-4 py-20 px-4 m-0 ">
        <div>
          <h1 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-500">How Petify Works</h1>
        </div>
        <div className="flex gap-4">
          
          <HomeMagicCard para='Sign up and create your profile as a pet owner or potential adopter.' heading={'Create an Account'} gradientColor="#262626" profileColour={"bg-blue-500/20"} />
          
          <HomeMagicCard para='Browse listings, connect with others, and discuss pet details.' heading={'Connect and Communicate'} gradientColor="#262626" profileColour={"bg-blue-500/20"} />

          <HomeMagicCard para='Arrange meetings and find the perfect new home for your pet.' heading={'Find a New Home'} gradientColor="#262626" profileColour={"bg-blue-500/20"} />
          
        </div>
      </div>
      

      {/* Testimonials Section */}
      <div className="flex z-0 items-center justify-center w-full text-white flex-col gap-8 py-20 px-4">
        <h2 className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-500 font-bold text-center mb-12">What Pet Lovers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
          <TestimotinalCard feedback={"Petify made it so easy to find a loving home for my dog when I had to move abroad. I'm grateful for this platform!"} name={'Sarah Johnson'} owner={'Dog Owner'} />
          
          <TestimotinalCard feedback={"Thanks to Petify, I found my perfect feline companion. The process was smooth and the communication was great."} name={'Michael Chen'} owner={'Cat Adopter'} />
          
          <TestimotinalCard feedback={"I was worried about finding a good home for my rabbits, but Petify connected me with wonderful adopters quickly"} name={'Emily Rodriguez'} owner={'Rabbit Owner'} />
          
        </div>
      </div>

    </div>
  );
}
