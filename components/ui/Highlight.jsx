"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";
import Image from "next/image";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
  gradient
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    (<div
      className={cn(
        "bg-[#2bc0e4] relative min-h-screen flex items-center justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}>
      {/* Background Image */}
      <div className="absolute md:block hidden inset-0 overflow-hidden">
        <Image 
          src="/assets/image/home2.jpg" 
          alt="Background" 
          fill 
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 " />
      </div>
      
      <motion.div
        className=" pointer-events-none bg-dot-thick-white absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }} />
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>)
  );
};

export const Highlight = ({
  children,
  className,
  gradient
}) => {
  return (
    (<motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r ${gradient ? gradient : 'from-pink-500 to-red-500'}`,
        className
      )}>
      {children}
    </motion.span>)
  );
};
