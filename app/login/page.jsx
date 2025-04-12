'use client'
import React, { useState, useEffect } from 'react'
import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { useSignIn, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const Page = () => {
    const router = useRouter();
    const { isLoaded, isSignedIn, user } = useUser();
    const { isLoaded: isSignInLoaded, signIn, setActive } = useSignIn();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Redirect if user is already signed in
    useEffect(() => {
        if (isLoaded && isSignedIn) {
            toast.success('YAAAHOOOO! We Are In')
            router.push('/');
        }
    }, [isLoaded, isSignedIn, router]);

    if (!isSignInLoaded) return <div className="min-h-screen flex justify-center items-center text-2xl font-bold text-purple-700">Loading...</div>;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const result = await signIn.create({
                identifier: email,
                password,
            });

            if (result.status === "complete") {
                // Set the active session
                await setActive({ session: result.createdSessionId });
                router.push('/');
            } else {
                // Handle additional verification steps if needed
                console.log("Additional verification needed", result);
                setError("Additional verification needed");
            }
        } catch (err) {
            console.error(err);
            setError(err.errors?.[0]?.message || 'Invalid email or password');
        } finally {
            setIsLoading(false);
        }
    };

    const signInWith = (strategy) => {
        setIsLoading(true);
        return signIn
            .authenticateWithRedirect({
                strategy,
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
        <div className="min-h-screen flex justify-center items-center min-w-[90vw] md:min-w-[1080px]">
            <div className="shadow-input mx-auto w-full relative bg-[#ffffff] max-w-md p-4 rounded-xl md:p-8">
                <Image width={450} height={200} alt="welcomPets" className="rounded-t-xl absolute left-0 -top-[20vw] md:-top-[88px]" src='/assets/image/signupImage.jpeg' />
                <h2 className="text-xl font-bold text-purple-800 ">
                    Welcome Back
                </h2>
                <p className="mt-2 max-w-sm text-sm text-neutral-600 ">
                    Login to Petify
                </p>
                <form className="my-8" onSubmit={handleSubmit}>
                    {error && (
                        <div className="mb-4 text-sm text-red-500">
                            {error}
                        </div>
                    )}
                    
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                            id="email" 
                            placeholder="petify@gmail.com" 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </LabelInputContainer>
                    
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password" 
                            placeholder="••••••••" 
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </LabelInputContainer>

                    <button
                        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Logging in...' : 'Log In'} &rarr;
                        <BottomGradient />
                    </button>

                    <div
                        className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                    <div className="flex flex-col space-y-4">
                        <button
                            type="button"
                            disabled={true}
                            onClick={() => signInWith('oauth_google')}
                            className="group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                        >
                            <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                Continue with Google
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