'use client';
// at the top of adopt/page.tsx
export const dynamic = 'force-dynamic';
import React, { Suspense } from 'react';
import AdoptionForm from '@/components/ui/AdoptionForm';
import { Toaster } from 'react-hot-toast';
import Loading from '@/components/ui/Loading';

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
