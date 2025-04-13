'use client';
// at the top of adopt/page.tsx
export const dynamic = 'force-dynamic';
import React, { Suspense } from 'react';
import AdoptionForm from '@/components/ui/AdoptionForm';
import { Toaster } from 'react-hot-toast';

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-4 w-full">
            <Toaster position="top-center" />
            <Suspense fallback={<Loading />}>
                <AdoptionForm />
            </Suspense>
        </div>
    );
}

function Loading() {
    return (
        <div className="shadow-input mx-auto w-full relative bg-[#ffffff] max-w-md p-4 rounded-xl md:p-8">
            <div className="my-8 flex flex-col gap-4">
                <div className="animate-pulse h-6 w-full bg-neutral-200 rounded"></div>
                <div className="animate-pulse h-6 w-full bg-neutral-200 rounded"></div>
                <div className="animate-pulse h-6 w-full bg-neutral-200 rounded"></div>
            </div>
        </div>
    );
}

