"use client";

import { motion } from "framer-motion";
import { Highlight, HeroHighlight } from "@/components/ui/Highlight";
import ShimmerButton from "./ui/Button";

const CTA = function () {
  return (
    <section className="w-full flex items-center justify-center bg-primary text-white m-0">
      <div className="flex flex-col mx-auto px-4 gap-4 items-center justify-center text-center">
        <Highlight className='p-2'>
        <motion.h2
          className="text-3xl md:text-6xl bg font-heading font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Find a New Home for Your Pet?
          </motion.h2>
        </Highlight>
        {/* <motion.p
          className="text-sm md:text-xl text-[#0f172a] rounded-md mb-8 bg-[#ffffff] p-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Buy, sell, or adopt pets safely. Connect with verified breeders, sellers, and rescue centers in your area.
        </motion.p> */}
        <Highlight className="text-md md:text-2xl font-bold p-2 text-white">
        Make a purr-fect connection today!
        </Highlight>
       <div className="flex text-white gap-2">
       <ShimmerButton href='/home' className="text-white font-semibold">Browse Pets</ShimmerButton>
          <ShimmerButton href='/home' className="text-white font-semibold">List Your Pet</ShimmerButton>
       </div>
      </div>
    </section>
  );
};

export default CTA;
