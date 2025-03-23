"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";

export function SignupFormDemo() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div className='min-h-screen min-w-full flex justify-center justify-items-center'>
            <div className="mx-auto w-full rounded-2xl p-4 md:p-8 shadow-input bg-black">
                <h2 className="font-bold text-xl font-mono sm:text-2xl text-neutral-200">
                    Welcome
                </h2>
                <p className="text-xs sm:text-sm max-w-sm mt-2 text-neutral-300">
                    Log In to Petify
                </p>

                <form className="my-6 sm:my-8">
                    <LabelInputContainer className="mb-4">
                        <Label className='text-white text-sm sm:text-base' htmlFor="email">Email Address</Label>
                        <Input
                            //   onChange={changeHandler}
                            name="email"
                            //   value={Form.email}
                            id="email"
                            placeholder="sahilahmad3504@gmail.com"
                            type="email"
                            className="text-sm sm:text-base"
                            autoComplete="new-email"
                        />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-4">
                        <Label className='text-white text-sm sm:text-base' htmlFor="password">Password</Label>
                        <Input
                            //   onChange={changeHandler}
                            name="password"
                            //   value={Form.password}
                            id="password"
                            placeholder="••••••••"
                            type="password"
                            className="text-sm sm:text-base"
                            autoComplete="new-password"
                        />
                    </LabelInputContainer>

                    <button
                        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                        type="submit">
                        Log In &rarr;
                        <BottomGradient />
                    </button>

                    <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-6 sm:my-8 h-[1px] w-full" />
                </form>

                <div className="flex flex-col space-y-3 sm:space-y-4">

                    <button
                        //   onClick={() => signIn('google')}
                        className="relative group/btn flex space-x-2 items-center justify-start px-3 sm:px-4 w-full text-black rounded-md h-9 sm:h-10 font-medium bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        type="submit">
                        {/* <IconBrandGoogle className="h-4 w-4 text-neutral-300" /> */}
                        <span className="text-neutral-300 text-xs sm:text-sm">
                            Google
                        </span>
                        <BottomGradient />
                    </button>
                </div>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span
                className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span
                className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
