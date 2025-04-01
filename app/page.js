"use client"
import CTA from "@/components/cta";
import FeaturingPets from "@/components/ui/FeaturingPets";
import { Highlight, HeroHighlight } from "@/components/ui/Highlight";
import HomeMagicCard from "@/components/ui/HomeMagicCard";
import MouseMoveEffect from "@/components/ui/mouseEffect";
import TestimotinalCard from "@/components/ui/TestimotinalCard";
import Image from "next/image";



export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
    {/* <AbortController></AbortController> */}
      <MouseMoveEffect/>
      <div className="flex  relative gap-0 md:gap-4 items-center justify-center w-full min-h-screen ">
        <HeroHighlight className={'flex '}>
          <CTA />
        </HeroHighlight>
      </div>

      <FeaturingPets/>
      <div className="flex z-0 items-center justify-center w-full text-white flex-col  py-10 md:py-20  px-4 md:px-8 gap-4 m-0 ">
        <div>
          <h1 className="md:text-4xl text-2xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-500">Why Choose Petify?</h1>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          <HomeMagicCard para='Find the perfect pet or owner with our advanced search features.' heading={'Easy'} gradientColor="#dec686" profileColour={'bg-blue-500/30'} img='/assets/image/home.jpeg' />
          
          <HomeMagicCard para='Connect directly with pet owners or potential adopters.' heading={'Direct Communication'} gradientColor="#ec4899" profileColour={"bg-purple-500/20"} img={'/assets/image/home2Removed.png'} />
          
          <HomeMagicCard para='Ensure your pet finds a caring and suitable new family.' heading={'Loving Homes'} gradientColor="#22c55e" profileColour={"bg-green-500/20"} img='/assets/image/home.jpeg' />
          
          <HomeMagicCard para='Your safety and privacy are our top priorities.' heading={'Secure Platform'} gradientColor="#c084fc" profileColour={"bg-blue-500/20"} img={'/assets/image/home2Removed.png'} />
          
        </div>
      </div>
      <div className="flex z-0 items-center justify-center w-full text-white flex-col gap-4  py-10 md:py-20 px-2 md:px-4 m-0 ">
        <div>
          <h1 className="md:text-3xl text-2xl font-semibold md:font-bold md:mb-12 mb-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-500">How Petify Works</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          
          <HomeMagicCard para='Sign up and create your profile as a pet owner or potential adopter.' heading={'Create an Account'} gradientColor="#ec4899" img={'/assets/image/home2Removed.png'} profileColour={"bg-blue-500/20"} />
          
          <HomeMagicCard para='Browse listings, connect with others, and discuss pet details.' heading={'Connect and Communicate'} gradientColor="#a3e635" img='/assets/image/home.jpeg' profileColour={"bg-blue-500/20"} />

          <HomeMagicCard para='Arrange meetings and find the perfect new home for your pet.' heading={'Find a New Home'} gradientColor="#ec4899" profileColour={"bg-blue-500/20"} img='/assets/image/home3.jpg' />
          
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
