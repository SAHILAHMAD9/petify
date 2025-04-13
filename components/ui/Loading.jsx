'use client';
import React from 'react';
export default function Loading() {
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