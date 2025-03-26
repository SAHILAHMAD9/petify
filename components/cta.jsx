"use client";

import { motion } from "framer-motion";
import { Highlight, HeroHighlight } from "@/components/ui/Highlight";
import ShimmerButton from "./ui/Button";
import InteractiveHoverButton from "./ui/Button2";

const CTA = function () {
  return (
    <section className="w-full flex items-center justify-center bg-primary text-white m-0">
      <div className="flex flex-col mx-auto px-4 gap-4 items-center justify-center text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Find a New Home for Your Pet?
        </motion.h2>
        <motion.p
          className="text-xl text-[#0f172a] mb-8 bg-[#ffffff] p-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Buy, sell, or adopt pets safely. Connect with verified breeders, sellers, and rescue centers in your area.
        </motion.p>
        <Highlight className="text-2xl font-bold p-2 text-white">
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
