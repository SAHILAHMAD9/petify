'use client';
export const dynamic = 'force-dynamic';
import React, { Suspense, useEffect, useState } from 'react';
import { useSignUp } from '@clerk/nextjs';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import Link from 'next/link';
import toast from 'react-hot-toast';
import Loading from '@/components/ui/Loading';

export default function Page() {
  return (
    <Suspense fallback={<Loading/>}>
      <VerifyEmailPage />
    </Suspense>
  );
}
const VerifyEmailPage = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [verificationStatus, setVerificationStatus] = useState('pending');
  const [error, setError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!isLoaded || !signUp) {
      return <div className="min-h-screen flex text-2xl font-bold text-purple-700 justify-center items-center">Loading...</div>;
    }

    // If no verification is needed, redirect to home
    // if (!signUp?.verifications?.emailAddress) {
    //   router.push('/');
    //   return;
    // }

    const verificationToken = searchParams.get('token');
    
    // If we have a token, attempt to verify it
    if (verificationToken) {
      verifyToken(verificationToken);
    }
  }, [isLoaded, signUp, router, searchParams]);

  const verifyToken = async (token) => {
    try {
      setVerificationStatus('verifying');
      // Attempt to verify the email with the token
      const result = await signUp.attemptEmailAddressVerification({
        token,
      });
      if (result.status === 'complete') {
        setVerificationStatus('complete');
        await setActive({ session: result.createdSessionId });
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } else {
        setVerificationStatus('incomplete');
        setError('Verification incomplete. Please try again.');
      }
    } catch (err) {
      console.error('Error verifying email:', err);
      setVerificationStatus('error');
      setError(err.errors?.[0]?.message || 'Failed to verify email. Please try again.');
    }
  };

  const resendVerificationEmail = async () => {
    try {
      setVerificationStatus('sending');
      await signUp.prepareEmailAddressVerification({
        strategy: 'email_code',
      });
      setVerificationStatus('sent');
      toast.success("Verification Code resent Sucessfully!")
    } catch (err) {
      console.error('Error sending verification email:', err);
      setError(err.errors?.[0]?.message || 'Failed to send verification email');
      setVerificationStatus('error');
    }
  };

  if (!isLoaded) {
    return <div className="min-h-screen flex text-2xl font-bold text-purple-700 justify-center items-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen container flex flex-col justify-center md:w-full w-[335px] items-center">
      <div className="shadow-input container mx-auto w-full  relative bg-[#ffffff] md:max-w-md p-4 rounded-xl md:p-8">
        <Image width={250} height={250} alt="WelcomPets" className="rounded-t-xl absolute right-0 -top-[170px]" src='/assets/image/verifyCode.png' />
        <h2 className="text-xl font-bold text-neutral-800">
          Verify Your Email
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600">
          {verificationStatus === 'pending' && 'Please check your email for a verification link or code.'}
          {verificationStatus === 'verifying' && 'Verifying your email...'}
          {verificationStatus === 'complete' && 'Email verified successfully! Redirecting...'}
          {verificationStatus === 'incomplete' && 'Verification incomplete. Please try again.'}
          {verificationStatus === 'error' && 'Verification failed. Please try again.'}
          {verificationStatus === 'sending' && 'Sending verification email...'}
          {verificationStatus === 'sent' && 'Verification email sent! Please check your inbox.'}
        </p>
        
        {error && (
          <div className="mt-4 text-sm text-red-500">
            {error}
          </div>
        )}
        
        <div className="my-8 flex flex-col space-y-4">
          {/* Button to go to code verification page */}
          <Link href="/verify-email/code">
            <button
              className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 from-zinc-900 to-zinc-900 "
            >
              Enter Verification Code
              <BottomGradient />
            </button>
          </Link>
          
          {(verificationStatus === 'pending' || verificationStatus === 'error' || verificationStatus === 'incomplete') && (
            <button
              onClick={resendVerificationEmail}
              className="group/btn relative block h-10 w-full rounded-md bg-gray-100 font-medium text-black shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
              disabled={verificationStatus === 'sending'}
            >
              {verificationStatus === 'sending' ? <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span> : 'Resend Verification Email'}
              <BottomGradient />
            </button>
          )}
          
          {(verificationStatus === 'sent' || verificationStatus === 'pending') && (
            <p className="mt-4 text-sm text-center text-neutral-600">
              Didn't receive an email? Check your spam folder or try again.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
}; 