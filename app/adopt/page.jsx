'use client'
import Image from 'next/image';
import React, { useState, useEffect, Suspense } from "react";
import { useUser } from '@clerk/nextjs';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import AdoptionForm from '@/components/ui/AdoptionForm';
// Initialize EmailJS with your public key
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

const Page = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const cardId = searchParams.get('petName');
    const [isLoading, setIsLoading] = useState(true);
    const { isSignedIn, user, isLoaded } = useUser();

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

    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-4 w-full">
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    style: {
                        zIndex: 9999,
                    },
                }}
            />
            <Suspense fallback={
                <div className="shadow-input mx-auto w-full relative bg-[#ffffff] max-w-md p-4 rounded-xl md:p-8">
                    <div className="my-8 flex flex-col justify-between items-center h-[320px]">
                        <div className="animate-pulse h-6 w-full bg-neutral-200 rounded"></div>
                        <div className="animate-pulse h-6 w-full bg-neutral-300 rounded"></div>
                        <div className="animate-pulse h-6 w-full bg-neutral-200 rounded"></div>
                        <div className="animate-pulse h-6 w-full bg-neutral-300 rounded"></div>
                        <div className="animate-pulse h-6 w-full bg-neutral-200 rounded"></div>
                        <div className="animate-pulse h-6 w-full bg-neutral-300 rounded"></div>
                    </div>
                </div>
            }>
                <AdoptionForm />
            </Suspense>
        </div>
    );
};


export default Page;