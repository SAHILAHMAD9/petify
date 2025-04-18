"use client";
import React, { useState, useEffect } from "react";
import Label from "@/components/ui/Label";
import Input from '@/components/ui/Input';
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useSignUp, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Page = () => {
    const router = useRouter();
    const { isLoaded, isSignedIn } = useUser();
    const { isLoaded: isSignUpLoaded, signUp, setActive } = useSignUp();
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    // Redirect if user is already signed in
    useEffect(() => {
        if (isLoaded && isSignedIn) {
            toast.success('Already SignUp');
            router.push('/');
        }
    }, [isLoaded, isSignedIn, router]);

    if (!isSignUpLoaded) return <div className="min-h-screen flex text-purple-700 z-10 text-2xl font-bold justify-center items-center">Loading...</div>;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        
        try {
            // First, create the user
            const result = await signUp.create({
                firstName: form.firstName,
                lastName: form.lastName,
                emailAddress: form.email,
                password: form.password,
            });
            
            if (result.status === "complete") {
                // If no verification needed, set the active session
                await setActive({ session: result.createdSessionId });
                router.push('/');
            } else {
                // Prepare email verification
                await signUp.prepareEmailAddressVerification({
                    strategy: "email_code",
                });
                
                // Redirect to verification page
                toast.success("Verification Code send to your registered email")
                router.push('/verify-email');
            }
        } catch (err) {
            console.error(err);
            setError(err.errors?.[0]?.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };
    
    const changeHandler = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
        console.log(form);
        
    };
    
    const signUpWithGoogle = () => {
        setIsLoading(true);
        return signUp
            .authenticateWithRedirect({
                strategy: "oauth_google",
                redirectUrl: '/sign-up/sso-callback',
                redirectUrlComplete: '/',
            })
            .catch((err) => {
                console.error(err);
                setError('Authentication failed');
                setIsLoading(false);
            });
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center min-w-[90vw] md:min-w-[1080px]">
            <div className="shadow-input mx-auto w-full relative bg-[#ffffff] max-w-md  p-4 rounded-xl md:p-8">
                <Image width={450} height={200} alt="WelcomPets" className="rounded-t-xl absolute left-0   -top-[20vw] md:-top-[88px]" src='/assets/image/signupImage.jpeg'/>
                <h2 className="text-2xl font-bold text-purple-800">
                    Welcome to Petify
                </h2>
                <p className="mt-2 max-w-sm text-sm text-neutral-600">
                    Signup to Petify 
                </p>
                
                {error && (
                    <div className="mt-4 text-sm text-red-500">
                        {error}
                    </div>
                )}
                
                <form className="my-8" onSubmit={handleSubmit}>
                    <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                        <LabelInputContainer>
                            <Label htmlFor="firstName">First name</Label>
                            <Input 
                                id="firstName" 
                                placeholder="Sahil" 
                                value={form.firstName} 
                                type="text" 
                                onChange={changeHandler}
                                required 
                            />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastName">Last name</Label>
                            <Input 
                                id="lastName" 
                                placeholder="Ahmad" 
                                type="text"
                                value={form.lastName}
                                onChange={changeHandler}
                                required
                            />
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                            id="email" 
                            placeholder="petify@gmail.com" 
                            type="email"
                            value={form.email}
                            onChange={changeHandler}
                            required
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="password">Password</Label>
                        <Input 
                            id="password" 
                            placeholder="••••••••" 
                            type={showPassword ? 'text' : 'password'}
                            value={form.password}
                            onChange={changeHandler}
                            required
                        />
                    </LabelInputContainer>

                    <button
                        className="group/btn relative block h-10 w-full rounded-md font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Almost There...
                        </span> : <>Sign up &rarr;</>}
                        <BottomGradient />
                    </button>

                    <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                    {/* <div className="flex flex-col space-y-4">
                        <button
                            className="group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                            type="button"
                            onClick={signUpWithGoogle}
                            disabled={isLoading}
                        >
                            <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                Continue with Google
                            </span>
                            <BottomGradient />
                        </button>
                    </div> */}
                </form>
            </div>
        </div>
    );
}

export default Page;

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
