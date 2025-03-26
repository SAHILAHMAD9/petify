'use client'
import React from 'react'
import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from 'next/image';

 const Page = () => {
  return (
      <div className="min-h-screen  flex  justify-center items-center min-w-[1080px]">
          <div
              className="shadow-input mx-auto w-full relative bg-[#ffffff] max-w-md rounded-none p-4 md:rounded-xl md:p-8">
              <Image width={450} height={200} className="roudnded-xl absolute left-0 -top-[88px]" src='/assets/image/signupImage.jpeg' />
              <h2 className="text-xl font-bold text-neutral-800 ">
                  Welcome Back
              </h2>
              <p className="mt-2 max-w-sm text-sm text-neutral-600 ">
                  Login to Petify
              </p>
              <form className="my-8">
                  <LabelInputContainer className="mb-4">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" placeholder="petify@gmail.com" type="email" />
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-4">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" placeholder="••••••••" type="password" />
                  </LabelInputContainer>

                  <button
                      className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                      type="submit">
                      Log In &rarr;
                      <BottomGradient />
                  </button>

                  <div
                      className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                  <div className="flex flex-col space-y-4">
                      <button
                          className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                          type="submit">
                          {/* <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" /> */}
                          <span className="text-sm text-neutral-700 dark:text-neutral-300">
                              Google
                          </span>
                          <BottomGradient />
                      </button>
                  </div>
              </form>
          </div>
          {/* <div className='flex justify-center items-center'>
              <Image alt='cat' src={'/assets/image/LoginSide.jpeg'} width={400} height={400} className='rounded-2xl '/>
        </div> */}
      </div>
  )
}
export default Page;

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};