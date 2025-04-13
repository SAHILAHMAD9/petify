'use client'
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import Label from "@/components/ui/Label";
import Input from '@/components/ui/Input';
import { cn } from "@/lib/utils";
import { useUser } from '@clerk/nextjs';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
// Initialize EmailJS with your public key
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

const Page = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const cardId = searchParams.get('petName');
    const [isLoading, setIsLoading] = useState(true);
    const { isSignedIn, user, isLoaded } = useUser();
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        petname: "",
    });

    useEffect(() => {
        // console.log('Card ID:', cardId);

        if (isLoaded) {
            const updatedForm = {
                fullName: user?.fullName || "",
                email: user?.primaryEmailAddress?.emailAddress || "",
                petname: cardId || ""
            };
            // console.log('Updating form with:', updatedForm);
            setForm(updatedForm);
            setIsLoading(false);
        }
    }, [isLoaded, user, cardId]);

    useEffect(() => {
        if (isLoaded && !isSignedIn) {
            toast.error('Please sign in to continue');
            router.push('/login');
        }
    }, [isLoaded, isSignedIn, router]);

    const changeHandler = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!form.fullName || !form.email || !form.petname) {
            toast.error('Please fill in all fields');
            setIsSubmitting(false);
            return;
        }
        try {
            const istDate = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Kolkata' }).replace(',', '');

            const templateParams = {
                to_name: "Support Team",
                from_name: form.fullName,
                from_email: form.email,
                pet_name: form.petname,
                message: `
                    New Adoption Request Details:
                    
                    Pet Name: ${form.petname}
                    Applicant Name: ${form.fullName}
                    Applicant Email: ${form.email}
                    Submission Date (UTC): ${currentDate}
                    User ID: ${user?.id || 'Not signed in'}
                    
                    This is an automated message from your Pet Adoption System.
                `,
                reply_to: form.email
            };
            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                templateParams
            );

            if (response.status === 200) {
                console.log("email chla gya");
                
                toast.success('Adoption request submitted successfully!');
                setSubmitted(true);
                localStorage.setItem('adoptionSubmission', JSON.stringify({
                    ...form,
                    submittedAt: currentDate
                }));
            }

        } catch (error) {
            console.error('Submission error:', error);
            console.log("email  nnhi  gya");
            toast.error('Failed to submit adoption request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-4 w-full">
            {/* <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    // Add custom styles to ensure visibility
                    style: {
                        // position:"absolute",
                        zIndex: 9999, // Very high z-index
                    },
                }}
            /> */}
            <div className="shadow-input mx-auto w-full relative bg-[#ffffff] max-w-md p-4 rounded-xl md:p-8">
                <Image width={150} height={100} alt="WelcomPets" className="rounded-t-xl absolute -right-[10px] -top-[150px]" src='/assets/image/form3.png' />
                <Image width={300} height={100} alt="WelcomPets" className="rounded-t-xl absolute hidden md:block md:-right-[300px] md:top-[200px]" src='/assets/image/form4.png' />
                {!submitted && <>
                    <h2 className="text-xl font-bold text-purple-700">
                        Ready to Adopt
                    </h2>
                    <p className="mt-2 max-w-sm text-sm text-pink-600">
                        Almost There
                    </p>
                </>}

                {isLoading ? (
                    <div className="my-8 flex flex-col justify-between items-center h-[320px]">
                        <div className="animate-pulse h-6 w-full bg-neutral-200 rounded"></div>
                        <div className="animate-pulse h-6 w-full bg-neutral-300 rounded"></div>
                        <div className="animate-pulse h-6 w-full bg-neutral-200 rounded"></div>
                        <div className="animate-pulse h-6 w-full bg-neutral-300 rounded"></div>
                        <div className="animate-pulse h-6 w-full bg-neutral-200 rounded"></div>
                        <div className="animate-pulse h-6 w-full bg-neutral-300 rounded"></div>
                    </div>
                ) : (!submitted ?
                    <form className="my-8" onSubmit={handleSubmit}>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="fullName">Your Full Name</Label>
                            <Input
                                id="fullName"
                                placeholder="Sahil Ahmad"
                                value={form.fullName}
                                type="text"
                                onChange={changeHandler}
                                required
                            />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Your Email Address</Label>
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
                            <Label htmlFor="petname">Pet Name</Label>
                            <Input
                                id="petname"
                                placeholder="Whisky"
                                type='text'
                                value={form.petname}
                                onChange={changeHandler}
                                required
                            />
                        </LabelInputContainer>

                        <button
                                    className="group/btn relative block h-10 w-full rounded-md font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </span>
                                    ) : (
                                        'Adopt →'
                                    )}
                                    <BottomGradient />
                                </button>

                        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
                        </form>
                        :
                        <div className="my-8 flex flex-col justify-center items-center gap-8 h-[380px]">
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-purple-700 text-2xl font-semibold'>Thanks For the Adoption</h1>
                                <p className='text-pink-500'>Our Team will get back to you shortly</p>
                            </div>
                            <Link href="/home">
                                <button className="text-white rounded-3xl py-3 px-6 mb-2 font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                                    Return to all pets
                                </button>
                            </Link>
                        </div>
                )}
            </div>
        </div>
    );
};

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

export default Page;